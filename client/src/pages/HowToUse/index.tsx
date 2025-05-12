// import Layout from "Layout";
// import React, { useState } from "react";
// import { useEffect } from "react";

// interface IProps {
//   className?: string;
// }

// interface FeatureProps {
//   title: string;
//   content: JSX.Element;
//   iconUrl: string;
//   isSelected: boolean;
//   onClick: () => void;
// }

// const Feature: React.FC<FeatureProps> = ({
//   title,
//   content,
//   iconUrl,
//   isSelected,
//   onClick,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`rounded-xl p-6 flex flex-col items-center justify-center w-[400px] h-[260px] cursor-pointer transition-all duration-300 ease-in-out shadow-md transform 
//         ${isHovered || isSelected
//           ? "bg-gradient-to-br from-[#48C9B0] to-[#1F618D] scale-105"
//           : "bg-white hover:shadow-xl border border-gray-200"
//         }`}
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {isHovered || isSelected ? (
//         <div className="text-white text-base overflow-y-auto h-full">
//           <h3 className="text-xl font-bold mb-3 border-b border-white pb-2">{title}</h3>
//           {content}
//         </div>
//       ) : (
//         <div className="flex flex-col items-center transition-all duration-300">
//           <div className="bg-blue-50 rounded-full p-4 mb-5">
//             <img src={iconUrl} alt={title} className="w-16 h-16" />
//           </div>
//           <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
//           <p className="mt-3 text-blue-600">Click to learn more</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const features = [
//   {
//     title: "Video Learning",
//     content: (
//       <>
//         <p className="mb-3 font-medium">Learn sign language through video tutorials:</p>
//         <ul className="space-y-2 mb-3">
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Search for specific topics in the search bar</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Watch comprehensive tutorials from experts</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Practice along with the videos</span>
//           </li>
//         </ul>
//         <p className="font-medium mt-2">
//           <span className="bg-white bg-opacity-30 px-2 py-1 rounded">👍 Track your progress as you learn</span>
//         </p>
//       </>
//     ),
//     iconUrl: "/assets/video.png",
//   },

//   {
//     title: "Dictionary",
//     content: (
//       <>
//         <p className="mb-3 font-medium">Look up words and phrases in sign language:</p>
//         <ul className="space-y-2 mb-3">
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Type your desired term in the search bar</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Select a suggestion to view related videos</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Watch demonstrative videos of the signs</span>
//           </li>
//         </ul>
//         <p className="font-medium mt-2">
//           <span className="bg-white bg-opacity-30 px-2 py-1 rounded">🔎 Try related terms for better results</span>
//         </p>
//       </>
//     ),
//     iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/book-512.png",
//   },
//   {
//     title: "Games",
//     content: (
//       <>
//         <p className="mb-3 font-medium">Practice sign language through fun games:</p>
//         <ul className="space-y-2 mb-3">
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span><b>Sign Game:</b> Practice hand signs for alphabet letters</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span><b>Video Game:</b> Test your knowledge with sign videos</span>
//           </li>
//           <li className="flex items-start">
//             <span className="text-white mr-2">•</span>
//             <span>Earn points and track your improvement</span>
//           </li>
//         </ul>
//         <p className="font-medium mt-2">
//           <span className="bg-white bg-opacity-30 px-2 py-1 rounded">🎮 Learn while having fun!</span>
//         </p>
//       </>
//     ),
//     iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/gamepad-256.png",
//   },
//   {
//     title: "Translator",
//     content: (
//       <>
//         <p className="mb-2">Translate between text and sign language:</p>
//         <p>
//           <strong>Text to Sign Language:</strong>
//         </p>
//         <ul className="list-disc list-inside mb-2">
//           <li>- Enter any text to translate into sign language.</li>
//           <li>- Watch an animation demonstrating the signs.</li>
//           <li>- Use it to communicate easily with others.</li>
//         </ul>
//         <p>
//           <strong>Sign Language to Text:</strong>
//         </p>
//         <ul className="list-disc list-inside">
//           <li>- Use your camera to perform sign language.</li>
//           <li>- The app converts the signs into written text.</li>
//           <li>- Perfect for real-time communication or practice.</li>
//         </ul>
//       </>
//     ),
//     iconUrl: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_g_translate_48px-512.png",
//   },
//   {
//     title: "Plan Your Day",
//     content: (
//       <>
//         <p className="mb-2">Easily plan your day in the kabanboard and calender</p>
//         <ul className="list-disc list-inside mb-2">
//           <li>- Drop, drag or delete tasks in the "To Do", "In Progress","Complete" columns.</li>
//           <li>- Add events to the calender.</li>

//         </ul>
//         <p>
//           <strong>Track your progress: </strong> Plan your day, make goals, and stay on top of your tasks
//         </p>
//       </>
//     ),
//     iconUrl: "/assets/calender.png",
//   },

//   {
//     title: "About Us",
//     content: (
//       <>
//         <p>Learn more about our mission, team, and commitment to supporting the deaf and mute community in the <strong>About Us</strong> section.</p>
//       </>
//     ),
//     iconUrl: "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Effective_employees-512.png",
//   },
// ];

// function HowToUse(props: IProps) {
//   const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
//   const [animatedItems, setAnimatedItems] = useState<boolean[]>(Array(features.length).fill(false));

//   // Animation khi trang tải
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const newAnimatedItems = [...animatedItems];
//       features.forEach((_, index) => {
//         setTimeout(() => {
//           newAnimatedItems[index] = true;
//           setAnimatedItems([...newAnimatedItems]);
//         }, index * 150);
//       });
//     }, 300);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Layout>
//       <div className='max-w-7xl mx-autp'>
//         <div className="flex items-center mb-8">
//           <div className="bg-blue-100 rounded-full p-3 mr-4">
//             <img
//               src="https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-44-512.png"
//               alt="How to Use"
//               className="w-12 h-12"
//             />
//           </div>
//           <h1 className="text-5xl font-extrabold text-blue-600">How to Use</h1>
//         </div>

//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-12 border-l-4 border-blue-500 shadow-md">
//           <p className="text-lg leading-relaxed">
//             Welcome to our website! This is an amazing tool for everyone to learn about Sign Language and improve their skills. We offer a variety of helpful features designed to make your learning journey enjoyable and effective.
//             <br /><br />
//             Here's a <span className="text-blue-600 font-semibold">step-by-step</span> guide to help you make the most of our features:
//           </p>
//         </div>
//         <div className="container mx-auto ">
//           <div className='flex flex-wrap justify-center gap-8'>
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`transition-all duration-700 transform ${animatedItems[index]
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-12 opacity-0"
//                   }`}
//               >
//                 <Feature
//                   title={feature.title}
//                   content={feature.content}
//                   iconUrl={feature.iconUrl}
//                   isSelected={selectedFeature === index}
//                   onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-16 mb-8 bg-blue-50 rounded-lg p-6 text-center">
//           <div className="text-3xl font-semibold text-blue-600 mb-3">Ready to start?</div>
//           <p className="text-xl text-gray-700">
//             We hope this guide helps you enjoy and learn sign language effectively!
//             Explore our features and begin your sign language journey today.
//           </p>
//         </div>
//       </div>

//       <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg mt-10 shadow-sm">
//         <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//           Pro Tips
//         </h3>
//         <div className="grid md:grid-cols-2 gap-4">
//           <div className="bg-white bg-opacity-70 p-4 rounded-lg">
//             <p className="font-medium text-indigo-900">💡 Practice regularly for better retention!</p>
//           </div>
//           <div className="bg-white bg-opacity-70 p-4 rounded-lg">
//             <p className="font-medium text-indigo-900">🔄 Switch between features to enhance learning!</p>
//           </div>
//         </div>
//       </div>

//     </Layout>
//   );
// }

// export default HowToUse;
import Layout from "Layout";
import React, { useState, useEffect } from "react";

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
      className={`rounded-xl p-6 flex flex-col items-center justify-center w-[380px] h-[260px] cursor-pointer transition-all duration-300 ease-in-out shadow-md transform 
        ${isHovered || isSelected
          ? "bg-gradient-to-br from-[#48C9B0] to-[#1F618D] scale-105 shadow-lg"
          : "bg-white hover:shadow-xl border border-gray-200"
        }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered || isSelected ? (
        <div className="text-white text-base overflow-y-auto h-full p-2">
          <h3 className="text-xl font-bold mb-3 border-b border-white pb-2 text-center">{title}</h3>
          {content}
        </div>
      ) : (
        <div className="flex flex-col items-center transition-all duration-300">
          <div className="bg-blue-50 rounded-full p-4 mb-5">
            <img src={iconUrl} alt={title} className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
          <p className="mt-3 text-blue-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Click to learn more
          </p>
        </div>
      )}
    </div>
  );
};

const features = [
  {
    title: "Video Learning",
    content: (
      <>
        <p className="mb-3 font-medium">Learn sign language through video tutorials:</p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Search for specific topics in the search bar</span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Watch comprehensive tutorials </span>
          </li>

        </ul>

      </>
    ),
    iconUrl: "/assets/video.png",
  },

  {
    title: "Dictionary",
    content: (
      <>
        <p className="mb-3 font-medium">Look up words and phrases in sign language:</p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Type your desired term in the search bar</span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Select suggestions for related videos</span>
          </li>

        </ul>

      </>
    ),
    iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/book-512.png",
  },
  {
    title: "Games",
    content: (
      <>
        <p className="mb-3 font-medium">Practice sign language through fun games:</p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span><b>Sign Game</b> </span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span><b>Video Game</b> </span>
          </li>
        </ul>

      </>
    ),
    iconUrl: "https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/gamepad-256.png",
  },
  {
    title: "Translator",
    content: (
      <>
        <p className="mb-2 font-medium">Translate between text and sign language:</p>
        <div className="space-y-1 mb-2">
          <p className="font-semibold text-white">Text to Sign Language</p>

        </div>
        <div className="space-y-1">
          <p className="font-semibold text-white">Sign Language to Text</p>

        </div>
      </>
    ),
    iconUrl: "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_g_translate_48px-512.png",
  },
  {
    title: "Plan Your Day",
    content: (
      <>
        <p className="mb-3 font-medium">Easily plan your day with our tools:</p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Use kanban board for task management</span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Drag & drop tasks between columns</span>
          </li>

        </ul>

      </>
    ),
    iconUrl: "/assets/calender.png",
  },
  {
    title: "About Us",
    content: (
      <>
        <p className="mb-3 font-medium">Learn about our mission and team:</p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Discover our commitment to accessibility</span>
          </li>
          <li className="flex items-start">
            <span className="text-white mr-2">•</span>
            <span>Meet the team behind our platform</span>
          </li>

        </ul>

      </>
    ),
    iconUrl: "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Effective_employees-512.png",
  },
];

function HowToUse(props: IProps) {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(Array(features.length).fill(false));

  // Animation khi trang tải
  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedItems = [...animatedItems];
      features.forEach((_, index) => {
        setTimeout(() => {
          newAnimatedItems[index] = true;
          setAnimatedItems([...newAnimatedItems]);
        }, index * 150);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="bg-blue-100 rounded-full p-3 mr-4">
            <img
              src="https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-44-512.png"
              alt="How to Use"
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-5xl font-extrabold text-blue-600">How to Use</h1>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-12 border-l-4 border-blue-500 shadow-md">
          <p className="text-lg leading-relaxed">
            Welcome to our website! This is an amazing tool for everyone to learn about Sign Language and improve their skills. We offer a variety of helpful features designed to make your learning journey enjoyable and effective.
            <br /><br />
            Here's a <span className="text-blue-600 font-semibold">step-by-step</span> guide to help you make the most of our features:
          </p>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-700 transform ${animatedItems[index]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
                  }`}
              >
                <Feature
                  title={feature.title}
                  content={feature.content}
                  iconUrl={feature.iconUrl}
                  isSelected={selectedFeature === index}
                  onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-3">Ready to start?</div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We hope this guide helps you enjoy and learn sign language effectively!
              Explore our features and begin your sign language journey today.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg mt-10 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Pro Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-sm">
              <p className="font-medium text-indigo-900">💡 Practice regularly for better retention!</p>
            </div>
            <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-sm">
              <p className="font-medium text-indigo-900">🔄 Switch between features to enhance learning!</p>
            </div>
            <div className="bg-white bg-opacity-70 p-4 rounded-lg shadow-sm">
              <p className="font-medium text-indigo-900">🎯 Set daily goals to track your progress!</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HowToUse;