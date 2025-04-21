import Layout from "Layout";
import { useHistory } from "react-router-dom";

interface IProps {
  className?: string;
}

function Dashboard(props: IProps) {
  const history = useHistory();

  const handleTranslateClick = () => {
    history.push("/translate");
  };

  const handleDictionaryClick = () => {
    history.push("/dictionary");
  };

  const handleAboutusClick = () => {
    history.push("/about-us");
  };

  const handleHowToUseClick = () => {
    history.push("/how-to-use");
  };

  const handleGameClick = () => {
    history.push("/game");
  };
  const handlePlanyourdayClick = () => {
    history.push("/planyourday");
  };
  const handleVideolearningClick = () => {
    history.push("/videolearning");
  };

  return (
    <Layout>
      <article className="xl:w-full xl:min-w-[unset] xl:m-0 xs:gap-y-20 tn:gap-y-[50px] w-[1156px] flex flex-col items-center gap-y-[50px] min-w-0 max-w-[1156px] mb-[61px] mx-auto">
        {/* Main content area */}
        <section
          className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-[length:cover] bg-no-repeat bg-white rounded-lg w-full z-[1] overflow-hidden"
          style={
            {
              "--src": `url(${"/assets/e707ad33aa6fd129f7f9bd3299ccd688.png"})`,
            } as any
          }
        >
          {/* Hero banner section */}
          <div className="xs:mt-20 xs:mr-0 xs:mb-20 xs:ml-[6.66%] tn:mt-[50px] tn:mr-0 tn:mb-[50px] tn:ml-[6.66%] w-[408px] flex flex-col gap-y-[31px] max-w-[85%] mt-[121px] mb-[107px] ml-[6.66%]">
            <h2 className="md:text-[34px] md:items-start xxs:text-[30px] font-black text-[37px] leading-[1.29] font-NunitoSans text-white z-[1]">
              Sign language communication tool
            </h2>

            <button
              className="bg-[rgb(84,169,206)] rounded-lg w-[184px] pt-[16.5px] pr-6 pb-[16.5px] pl-6 flex justify-center items-center gap-x-3 max-w-full cursor-pointer"
              onClick={handleHowToUseClick}
            >
              {/* TODO */}
              <p className="font-semibold text-[18px] leading-[1.27] font-PlusJakartaSans text-white capitalize min-w-0 mt-px">
                How to use
              </p>
              <img
                className="w-6 min-w-0"
                src={"/assets/9a492b13b04238b64597d6cd1d66e897.png"}
                alt="alt text"
              />
            </button>
          </div>
        </section>

        <section className="md:gap-x-4 sm:grid-cols-[repeat(1,_minmax(0,_1fr))] grid grid-cols-[repeat(2,_minmax(0,_1fr))] content-start gap-y-[40px] gap-x-[80px] w-[85%]">
          {/* Dictionary */}
          <article
            className="flex flex-col relative row-span-1 column-span-1 cursor-pointer "
            onClick={handleDictionaryClick}
          >
            <div className="bg-[rgb(30,30,47)] rounded-[10px] relative min-h-[150px]">
              <img
                className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
                src="https://cdn1.iconfinder.com/data/icons/male-characters-2-1/1000/character_builder___library_man_carry_book_notebook-256.png"
                alt="alt text"
              />
            </div>
            <button className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-white absolute left-[15px] top-[10px]">
              Dictionary
            </button>
          </article>

          {/* Translator */}
          <div
            className="flex flex-col bg-[rgba(244,222,10,0.729)] rounded-[10px] relative row-span-1 column-span-1 cursor-pointer"
            onClick={handleTranslateClick}
          >
            <button className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-black absolute left-[15px] top-[10px]">
              Translator
            </button>
            <img
              className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
              src="https://cdn0.iconfinder.com/data/icons/akura-travel-illustration/512/Translate-256.png"
              alt="alt text"
            />
          </div>

          {/* Games */}
          <div
            className="flex flex-col relative row-span-1 column-span-1 cursor-pointer"
            onClick={handleGameClick}
          >
            <div className="bg-[rgb(84,169,206)] rounded-[10px] relative min-h-[150px]" />
            <h2 className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-white absolute left-[15px] top-[10px]">
              Games
            </h2>
            <img
              className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
              src="/assets/327fb7c90ade98ac584799bb547c9734.png"
              alt="alt text"
            />
          </div>
          {/* videolearning */}
          <div
            className="flex flex-col relative row-span-1 column-span-1 cursor-pointer"
            onClick={handleVideolearningClick}
          >
            <div className="bg-[rgb(84,169,206)] rounded-[10px] relative min-h-[150px]" />
            <h2 className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-white absolute left-[15px] top-[10px]">
              Video Learning
            </h2>
            <img
              className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
              src="/assets/327fb7c90ade98ac584799bb547c9734.png"
              alt="alt text"
            />
          </div>

          {/* Planyourday */}
          <div
            className="flex flex-col relative row-span-1 column-span-1 cursor-pointer"
            onClick={handlePlanyourdayClick}
          >
            <div className="bg-[rgba(75,75,89,0.607)] rounded-[10px] relative min-h-[150px]" />
            <button className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-white absolute left-[15px] top-[10px]">
              Plan your day
            </button>
            <img
              className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
              src="https://cdn0.iconfinder.com/data/icons/business-profile-1/1000/2205Profile-BusinessProfile-256.png"
              alt="alt text"
            />
          </div>
          {/* About us */}
          <div
            className="flex flex-col relative row-span-1 column-span-1 cursor-pointer"
            onClick={handleAboutusClick}
          >
            <div className="bg-[rgba(75,75,89,0.607)] rounded-[10px] relative min-h-[150px]" />
            <button className="md:text-[28px] font-normal text-[30px] font-PlusJakartaSans text-white absolute left-[15px] top-[10px]">
              About us
            </button>
            <img
              className="w-[180px] translate-x-0 translate-y-[-50%] absolute right-[-30px] top-1/2"
              src="https://cdn0.iconfinder.com/data/icons/business-profile-1/1000/2205Profile-BusinessProfile-256.png"
              alt="alt text"
            />
          </div>
        </section>
      </article>
    </Layout>
  );
}

export default Dashboard;
