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

      <section className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 gap-8">
        {/* Card Sign Game */}
        <article
          onClick={handleSigngameClick}
          className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow w-full"
        >
          {/* Hướng dẫn thay cho hình ảnh */}
          <div className="w-full bg-blue-50 p-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Hướng dẫn chơi Game Ngôn ngữ ký hiệu</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Sử dụng tay để biểu thị chữ cái trên màn hình</li>
              <li>Mỗi lần thực hiện đúng biểu tượng tay theo ký tự yêu cầu, bạn được cộng 1 điểm</li>
              <li>Bạn có 10 giây để tạo biểu tượng tay đúng</li>
              <li>Game sẽ hiển thị chữ cái ngẫu nhiên A, B, D, E, I, H</li>
              <li>Sử dụng camera để nhận diện cử chỉ tay của bạn</li>
            </ul>

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
          className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow w-full"
        >
          {/* Hướng dẫn thay cho hình ảnh */}
          <div className="w-full bg-green-50 p-6">
            <h3 className="text-2xl font-bold text-green-600 mb-3">Hướng dẫn chơi Video Game</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Xem các video hướng dẫn về ngôn ngữ ký hiệu</li>
              <li>Làm bài kiểm tra kiến thức sau mỗi video</li>
              <li>Trả lời câu hỏi liên quan đến nội dung video</li>
              <li>Tích lũy điểm để mở khóa nội dung học tập nâng cao</li>
              <li>Phù hợp cho người mới bắt đầu học ngôn ngữ ký hiệu</li>
            </ul>
            <div className="mt-4 flex justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
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
