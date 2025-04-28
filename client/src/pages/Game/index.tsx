import React from "react";
import Layout from "Layout";
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
      {/* Giữ nguyên header và phần mô tả bên trên */}
      <h1 className="text-5xl font-extrabold mb-6 text-blue-600 ">Game</h1>
      <hr className="mb-6 border-gray-300" />
      <p className="text-lg  mb-8">
        Choose your game and play by clicking the buttons below!
      </p>

      {/* Dùng flex để chia 2 phần game theo chiều ngang */}
      <section className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 gap-8">
        {/* Card Sign Game */}
        <article
          onClick={handleSigngameClick}
          className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow w-full"
        >
          {/* Image */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <img
              src="/assets/handscan.jpg"
              alt="Sign Game"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex justify-center">
            <button className="bg-blue-600 text-white text-base font-PlusJakartaSans px-6 py-2 rounded-[3px] hover:bg-blue-800 transition-colors">
              Play Sign Game
            </button>
          </div>
        </article>

        {/* Card Video Game */}
        <article
          onClick={handleVideogameClick}
          className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow w-full "
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <img
              src="/assets/videogame.jpg"
              alt="Video Game"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex justify-center">
            <button className="bg-blue-600 text-white text-base font-PlusJakartaSans px-6 py-2 rounded-[3px] hover:bg-blue-800 transition-colors">
              Play Video Game
            </button>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Games;
