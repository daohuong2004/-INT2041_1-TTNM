import React from "react";
import Layout from "Layout";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}
function Games(props: IProps) {
  const history = useHistory();
  const handleSigngameClick = () => {
    history.push("/Signgame");
  };
  const handleVideogameClick = () => {
    history.push("/Videogame");
  };


return (
    <Layout>
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Game</h1>
      <div className="space-y-8">
        <p className="text-lg">
          Choose your game from the dropdown menu in the sidebar!
        </p>
      </div>
      <section className="md:gap-x-4 sm:grid-cols-[repeat(1,_minmax(0,_1fr))] grid grid-cols-[repeat(2,_minmax(0,_1fr))] content-start gap-y-[40px] gap-x-[80px] w-[85%]">
          {/* Dictionary */}
          <article
            className="flex flex-col relative row-span-1 column-span-1 cursor-pointer "
            onClick={handleSigngameClick}
          >
            <div className="bg-[rgb(30,30,47)] rounded-[10px] relative min-h-[150px]">
              <img
                className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
                src="https://cdn1.iconfinder.com/data/icons/male-characters-2-1/1000/character_builder___library_man_carry_book_notebook-256.png"
                alt="alt text"
              />
            </div>
            <button className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-white absolute left-[15px] top-[10px]">
              Sign Game
            </button>
          </article>

          {/* Translator */}
          <div
            className="flex flex-col bg-[rgba(244,222,10,0.729)] rounded-[10px] relative row-span-1 column-span-1 cursor-pointer"
            onClick={handleVideogameClick}
          >
            <button className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-black absolute left-[15px] top-[10px]">
              Video Game
            </button>
            <img
              className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
              src="https://cdn0.iconfinder.com/data/icons/akura-travel-illustration/512/Translate-256.png"
              alt="alt text"
            />
          </div>
          </section>
    </Layout>
  );
}
export default Games
