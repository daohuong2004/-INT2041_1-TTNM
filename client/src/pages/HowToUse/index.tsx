import Layout from "Layout";
import React, { useState } from "react";

interface IProps {
  className?: string;
}

interface FeatureProps {
  title: string;
  content: JSX.Element;
  iconUrl: string;
  isSelected: boolean;
  onClick: () => void;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  content,
  iconUrl,
  isSelected,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg p-6 flex flex-col items-center justify-center w-[400px] h-[244px] cursor-pointer transition-all duration-300 ease-in-out transform 
        ${
          isHovered || isSelected
            ? "scale-105 shadow-xl bg-gradient-to-t from-[#48C9B0] to-[#1F618D]"
            : "hover:scale-105 hover:shadow-lg"
        }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered || isSelected ? (
        <div className="text-white text-sm">{content}</div>
      ) : (
        <>
          <img src={iconUrl} alt={title} className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold text-center">{title}</h2>
        </>
      )}
    </div>
  );
};

const features = [
  {
    title: "Video Learning",
    content: (
      <>
        <p className="mb-2">Easily look up sign language video</p>
        <ul className="list-disc list-inside mb-2">
          <li>- Type your video that you want to search in the search bar.</li>
          <li>- Watch videos to learn more abour sign language.</li>
        </ul>
        <p>
          <strong>Track Your Progress:</strong> Watch videos and improve your knowledge.
        </p>
      </>
    ),
    iconUrl: "/assets/video.png",
  },
  
  {
    title: "Dictionary",
    content: (
      <>
        <p className="mb-2">Easily look up words and phrases in sign language:</p>
        <ul className="list-disc list-inside mb-2">
          <li>- Type your desired term in the search bar.</li>
          <li>- Select a suggestion to view related videos.</li>
          <li>- Watch videos demonstrating the corresponding signs.</li>
        </ul>
        <p>
          <strong>No Results?</strong> Try searching for related terms or simpler phrases.
        </p>
      </>
    ),
    iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/book-512.png",
  },
  {
    title: "Games",
    content: (
      <>
        <p className="mb-2">A fun way to practice sign language recognition:</p>
        <ul className="list-disc list-inside mb-2">
          <li>- <strong>Sign Game</strong>: use hand signs corresponding to the target alphabet letters in sign language.</li>
          <li>- <strong>Video Game</strong>: watch the sign language video displayed on the screen and choose the correct answer.</li>
          
          
        </ul>
        <p>
          <strong>Track Your Progress:</strong> Use the game to test and improve your knowledge.
        </p>
      </>
    ),
    iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/gamepad-256.png",
  },
  {
    title: "Translator",
    content: (
      <>
        <p className="mb-2">Translate between text and sign language:</p>
        <p>
          <strong>Text to Sign Language:</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>- Enter any text to translate into sign language.</li>
          <li>- Watch an animation demonstrating the signs.</li>
          <li>- Use it to communicate easily with others.</li>
        </ul>
        <p>
          <strong>Sign Language to Text:</strong>
        </p>
        <ul className="list-disc list-inside">
          <li>- Use your camera to perform sign language.</li>
          <li>- The app converts the signs into written text.</li>
          <li>- Perfect for real-time communication or practice.</li>
        </ul>
      </>
    ),
    iconUrl: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_g_translate_48px-512.png",
  },
  {
    title: "Plan Your Day",
    content: (
      <>
        <p className="mb-2">Easily plan your day in the kabanboard and calender</p>
        <ul className="list-disc list-inside mb-2">
          <li>- Drop, drag or delete tasks in the "To Do", "In Progress","Complete" columns.</li>
          <li>- Add events to the calender.</li>
        
        </ul>
        <p>
          <strong>Track your progress: </strong> Plan your day, make goals, and stay on top of your tasks
        </p>
      </>
    ),
    iconUrl: "/assets/calender.png",
  },

  {
    title: "About Us",
    content: (
      <>
        <p>Learn more about our mission, team, and commitment to supporting the deaf and mute community in the <strong>About Us</strong> section.</p>
      </>
    ),
    iconUrl: "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Effective_employees-512.png",
  },
];

function HowToUse(props: IProps) {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  return (
    <Layout>
      <div>
        <h1 className="text-5xl font-extrabold mb-6 text-blue-600">How to use</h1>
        <hr className="mb-6 border-gray-300" />
        <p className="mb-12 text-lg">
          Welcome to our app! Here's a  <span className="text-blue-600">step-by-step </span>guide to help you make the most of its features:
        </p>
        <div className="container mx-auto flex flex-wrap justify-center gap-10">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              content={feature.content}
              iconUrl={feature.iconUrl}
              isSelected={selectedFeature === index}
              onClick={() =>
                setSelectedFeature(selectedFeature === index ? null : index)
              }
            />
          ))}
        </div>
        <div className="mt-12 text-center text-xl">
          <p>
            We hope this guide helps you enjoy and learn sign language effectively!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default HowToUse;
