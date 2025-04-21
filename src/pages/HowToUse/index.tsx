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
}) => (
  <div
    className={`bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center w-[500px] h-[244px] cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-gradient-to-t hover:from-[#48C9B0] hover:to-[#1F618D] 
      ${
      isSelected ? "scale-105 shadow-xl" : "hover:scale-105 hover:shadow-lg"
    }`}
    onClick={onClick}
  >
    {!isSelected ? (
      <>
        <img src={iconUrl} alt={title} className="w-16 h-16 mb-4" />
        <h2 className="text-xl font-semibold text-center">{title}</h2>
      </>
    ) : (
      <div className="text-gray-800 text-sm">{content}</div>
    )}
  </div>
);

const features = [
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
    title: "Guess the Sign Game",
    content: (
      <>
        <p className="mb-2">A fun way to practice sign language recognition:</p>
        <ul className="list-disc list-inside mb-2">
          <li>- Watch the sign language video displayed on the screen.</li>
          <li>- Choose the correct answer from the options below the video.</li>
          <li>- Check your answer, and move on to the next challenge.</li>
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
        <h1 className="text-5xl font-extrabold mb-6 text-[#1F618D]">How to use</h1>
        <hr className="mb-6 border-gray-300" />
        <p className="mb-12 text-lg">
          Welcome to our app! Here's a  <span className="text-[#48C9B0]">step-by-step </span>guide to help you make the most of its features:
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
