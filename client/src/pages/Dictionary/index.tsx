import React, { useState, useEffect } from "react";
import SearchBar from "components/Searchbar";
import Layout from "Layout";
import { GlossEntry } from "types";
import { parseGlossary } from "utils";

interface IProps {
  className?: string;
}

const YOUTUBE_API_KEY = "AIzaSyCTXMbVAAFr8muCvl77GUjIdzRB7f8qdBE";

function Dictionary(props: IProps) {
  const [glossary, setGlossary] = useState<{ [key: string]: number }>({});
  const [data, setData] = useState<GlossEntry[]>([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedGloss, setSelectedGloss] = useState<GlossEntry | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [videoErrors, setVideoErrors] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    loadData("/data/WLASL_v0.3.json", setData, "Could not load dictionary data. Please check the file path and try again.");
  }, []);

  useEffect(() => {
    loadGlossary("/data/wlasl_class_list.txt", setGlossary, "Could not load glossary data.");
  }, []);

  const loadData = (url: string, setData: React.Dispatch<React.SetStateAction<any>>, errorMessage: string) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load JSON file");
        return response.json();
      })
      .then((json) => {
        console.log("JSON data loaded:", json);
        setData(json);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
        setLoadError(errorMessage);
      });
  };

  const loadGlossary = (url: string, setGlossary: React.Dispatch<React.SetStateAction<any>>, errorMessage: string) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to load glossary file: ${response.statusText}`);
        return response.text();
      })
      .then((text) => setGlossary(parseGlossary(text)))
      .catch((error) => {
        console.error("Error loading glossary data:", error);
        setLoadError(errorMessage);
      });
  };

  const checkYouTubeVideoStatus = async (videoId: string) => {
    console.log(`Checking status for video ID: ${videoId}`);
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=status`
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const status = data.items[0].status;
      console.log(`Video ID: ${videoId}, Privacy Status: ${status.privacyStatus}, Embeddable: ${status.embeddable}`);
      return status.privacyStatus === "private" || status.embeddable === false;
    }
    console.log(`Video ID: ${videoId} is unavailable`);
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedGloss(null);
    setNotFound(false);

    if (value) {
      const matches = Object.keys(glossary).filter((word) =>
        word.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (word: string) => {
    console.log(`Suggestion clicked: ${word}`);
    const entry = data.find((item) => item.gloss === word);
    if (entry) {
      const filteredInstances = await filterInstances(entry.instances);
      setSelectedGloss({ ...entry, instances: filteredInstances });
    } else {
      setSelectedGloss(null);
    }
    setQuery(word);
    setSuggestions([]);
    setNotFound(!entry);
  };

  const filterInstances = async (instances: any[]) => {
    const filteredInstances = [];
    for (const instance of instances) {
      if (instance.url.includes("youtube.com") || instance.url.includes("youtu.be")) {
        let videoId = extractVideoId(instance.url);
        if (videoId && !(await checkYouTubeVideoStatus(videoId))) {
          filteredInstances.push(instance);
        }
      } else {
        filteredInstances.push(instance);
      }
    }
    return filteredInstances;
  };

  const extractVideoId = (url: string) => {
    if (url.includes("youtube.com")) {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get("v") || "";
    } else if (url.includes("youtu.be")) {
      return url.split("/").pop() || "";
    }
    return "";
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(`Enter key pressed with query: ${query}`);
      handleSuggestionClick(query);
    }
  };

  const handleVideoError = (url: string) => {
    console.error(`Error loading video: ${url}`);
    setVideoErrors((prevErrors) => ({ ...prevErrors, [url]: true }));
  };

  const renderVideo = (url: string) => {
    if (videoErrors[url]) {
      console.log(`Video error for URL: ${url}`);
      return null; 
    }

    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = extractVideoId(url);
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return (
          <iframe
            width="400"
            height="300"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ pointerEvents: 'auto' }}
            onError={() => handleVideoError(url)}
            title={`YouTube video player - ${videoId}`} 
          ></iframe>
        );
      }
    } else {
      return (
        <video
          controls
          className="w-full h-auto max-w-[400px]"
          onError={() => handleVideoError(url)}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <Layout>
        <div>
          <h1 className="text-5xl font-extrabold mb-6 text-[#1F618D]">Dictionary</h1>
          <hr className="mb-6 border-gray-300" />
          <p className="mb-4 text-lg">Easily look up words and phrases in sign language.</p>
          <p className="mb-4 text-lg">View corresponding videos that show the signs for searched terms.</p>
          <p className="mb-4 text-lg">Provides resources for individuals in the deaf and mute community and those looking to enhance their sign language skills.</p>
          <p className="mb-12 text-lg">Hopefully these videos will help you learn and use sign language better.</p>
          <hr className="mb-6 border-gray-300" />
          <div className="relative mb-6">
            <SearchBar
              query={query}
              onInputChange={handleInputChange}
              onKeyPress={handleKeyPress}
              suggestions={suggestions}
              onSuggestionClick={handleSuggestionClick}
            />
          </div>

          {notFound ? (
            <p className="text-lg text-red-500">No results found for "{query}". Please try another term.</p>
          ) : selectedGloss ? (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">{selectedGloss.gloss}</h2>
              {loadError && <p className="text-red-500">{loadError}</p>}
              <div className="grid grid-cols-2 gap-3">
                {selectedGloss.instances
                  .filter(instance => !videoErrors[instance.url]) 
                  .map(instance => (
                    <div key={instance.instance_id} className="flex justify-center">
                      {renderVideo(instance.url)}
                    </div>
                  ))}
              </div>
            </div>
          ) : null}
        </div>
    </Layout>
  );
}

export default Dictionary;
