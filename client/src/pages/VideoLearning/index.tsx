import React, { useState, useEffect } from "react";
import VideoLesson from "components/VideoLesson";

import Layout from "Layout";

import { PlayCircle, Image, Award, Star, BookOpen, Video as VideoIcon, Zap, Clock, Search } from "lucide-react";
import axios from "axios";

interface VideoLessonType {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  duration: string;
}


export default function VideoLearning() {
  
  const [activeTab, setActiveTab] = useState<string>("video-lessons"); // Tabs for navigation
  const [videoLessons, setVideoLessons] = useState<VideoLessonType[]>([]); // State for YouTube videos
  const [loading, setLoading] = useState<boolean>(true); // Loading state for API call
  const [searchQuery, setSearchQuery] = useState<string>("sign language tutorial"); // Search query state
  const [searchInput, setSearchInput] = useState<string>(""); // User input for search
  function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
  }
  
  // Trong component:
  
  const [suggestions, setSuggestions] = useState<string[]>([]);
  
  const debouncedInput = useDebounce(searchInput, 300);

  // YouTube API Key
  const API_KEY = "AIzaSyCTXMbVAAFr8muCvl77GUjIdzRB7f8qdBE"; 

  // Fetch YouTube videos based on search query
  const fetchVideos = async (query: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${API_KEY}&type=video`
      );
      const videos = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channel: item.snippet.channelTitle,
        duration: "10:00", // Duration can be fetched using another API call
      }));
      setVideoLessons(videos);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      setLoading(false);
    }
  };

  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos(searchQuery);
  }, [searchQuery]);

  // Handle search input submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput); // Update search query state
  };
  
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!debouncedInput.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await axios.get(
          `https://suggestqueries.google.com/complete/search`,
          {
            params: {
              client: "youtube",
              ds: "yt",
              q: debouncedInput,
            },
          }
        );
        const data = response.data[1].map((item: any) => item[0]);
        setSuggestions(data);
      } catch (err) {
        console.error("Error fetching suggestions", err);
      }
    };
  
    fetchSuggestions();
  }, [debouncedInput]);
  

 

  return (
    <Layout>
    <div className="flex min-h-screen bg-gray-100">
    

      {/* Sidebar */}
      {/* Main Content */}
      <div className="flex-1 ml-0 p-0 mt-0 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Video Learning Tools</h1>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex items-center bg-gray-200 rounded-lg p-2">
            <input
              type="text"
              placeholder="Search for videos..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-transparent outline-none px-4 py-2"
            />
            <button type="submit" className="p-2 text-gray-600 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
        </form>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("video-lessons")}
            className={`px-6 py-2 rounded-lg flex items-center ${
              activeTab === "video-lessons"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-600 hover:text-white transition duration-300`}
          >
            <PlayCircle size={18} className="mr-2" />
            Video Lessons
          </button>
          
          
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === "video-lessons" && (
          <div className="space-y-8">
            {loading ? (
              <div className="text-center text-gray-600">Loading videos...</div>
            ) : (
              videoLessons.map((lesson) => (
                <VideoLesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  thumbnail={lesson.thumbnail}
                  channel={lesson.channel}
                  videoId={lesson.id}
                />
              ))
            )}
          </div>
        )}

       

        

       
      </div>
    </div>
    </Layout>
  );
}


