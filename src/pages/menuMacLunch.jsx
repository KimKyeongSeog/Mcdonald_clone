import MenuDropDown from "../components/MenuDropDown";
import TopButtons from "../components/TopButtons";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
import { useState } from "react";

const MenuMacLunch = () => {
  const MainCardList = [
    {
      index: "1",
      image: "./image/mc-lunchset-1.png",
      title: "더블 비프 미트칠리 버거 세트",
      describe: "Double Beef Meat Chill Burger EVM"
    },
    {
      index: "2",
      image: "./image/mc-lunchset-2.png",
      title: "미트칠리 BLT 버거 세트",
      describe: "Meat Chill Blt Burger EVM"
    },
    {
      index: "3",
      image: "./image/mc-lunchset-3.png",
      title: "빅맥 세트",
      describe: "Big Mac Meal"
    },
    {
      index: "4",
      image: "./image/mc-lunchset-4.png",
      title: "맥크리스피 디럭스 버거 세트",
      describe: "McCrispy Deluxe Burger Meal"
    },
    {
      index: "5",
      image: "./image/mc-lunchset-5.png",
      title: "맥스파이시 상하이 버거 세트",
      describe: "McSpicy Shanghai Burger Meal"
    },
    {
      index: "6",
      image: "./image/mc-lunchset-6.png",
      title: "1955 버거 세트",
      describe: "1955 Burger Meal"
    },
    {
      index: "7",
      image: "./image/mc-lunchset-7.png",
      title: "더블 불고기 버거 세트",
      describe: "Double Bulgogi Burger Meal"
    },
    {
      index: "8",
      image: "./image/mc-lunchset-8.png",
      title: "베이컨 토마토 디럭스 세트",
      describe: "Bacon Tomato Deluxe Meal"
    }
  ];

  const [selectedButton, setSelectedButton] = useState(false);

  const onClickButton = () => {
    setSelectedButton(!selectedButton);
  };

  return (
    <div>
      <div className=" absolute font-['Nanum700']">
        <header>
          <MenuDropDown />
        </header>
        <div className=" text-white" name="top-banner">
          <div className="absolute bg-black min-w-full h-[220px] z-10 sm:pl-[0%] md:pl-[0%] lg:pl-[18.5%] opacity-30">
            <div className="relative flex flex-col ">
              <span className="text-5xl py-6">맥런치</span>
              <span className="text-lg pb-2 font-['Nanum300']">
                오전 10시 30분부터 오후 2시까지
              </span>
              <span className="text-lg pb-2 font-['Nanum300']">
                점심만의 특별한 할인으로 맥런치 세트를 즐겨보세요!
              </span>
              <div className="flex pt-2 font-['Nanum300']">
                <button>Home</button>
                <div className="font-['Nanum300'] h-[6px] w-[6px] mx-2 mt-[8px] bg-yellow-400 rounded-full"></div>
                <button>Menu</button>
                <div className="font-['Nanum300'] h-[6px] w-[6px] mx-2 mt-[8px] bg-yellow-400 rounded-full"></div>
                <button>맥런치</button>
              </div>
            </div>
          </div>
          <img
            className=" h-[220px]"
            src="../image/mc-lunch-banner.jpg"
            alt="burger-banner"
          />
        </div>
        <div className="fixed mx-[85%] my-[-10%] md:visible" name="button">
          <TopButtons />
        </div>
        <main
          className={`w-min-screen m-[40px] ${!selectedButton ? "" : "hidden"}`}
        >
          <div className="mt-4 mb-4 flex gap-20 text-xl  justify-center items-center">
            <button
              onClick={onClickButton}
              className="text-red-600 border-b-2 border-red-600"
            >
              맥런치 메뉴
            </button>
          </div>

          <div className="lg:ml-[20%] pt-4 pb-8 flex">
            <div className="bg-yellow-500 w-[5px] h-[5px] mt-[7px] mr-3 rounded-full"></div>{" "}
            21 Product
          </div>
          <section className="flex flex-col items-center">
            <div className="w-[1203px] grid grid-cols-3">
              {MainCardList.map((v, i) => {
                return (
                  <MainCard
                    index={v.index}
                    image={v.image}
                    title={v.title}
                    describe={v.describe}
                  />
                );
              })}
            </div>
          </section>
        </main>

        <div className="font-['Nanum'] bg-[#292929] min-w-full h-[260px] flex items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MenuMacLunch;
