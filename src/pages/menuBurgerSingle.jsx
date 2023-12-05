import MenuDropDown from "../components/MenuDropDown";
import TopButtons from "../components/TopButtons";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";

import { useState } from "react";

const MenuBurgerSingle = () => {
  const MainCardList = [
    {
      index: "1",
      image: "./image/mc-single-01.png",
      title: "더블 비프 미트칠리 버거",
      describe: "Double Beef Meat Chill Burger"
    },
    {
      index: "2",
      image: "./image/mc-single-02.png",
      title: "미트칠리 BLT 버거",
      describe: "Meat Chill Blt Burger"
    },
    {
      index: "3",
      image: "./image/mc-single-03.png",
      title: "빅맥",
      describe: "Big Mac"
    },
    {
      index: "4",
      image: "./image/mc-single-04.png",
      title: "더블 쿼터파운더 치즈",
      describe: "Double Quarter Pounder with Cheese"
    },
    {
      index: "5",
      image: "./image/mc-single-05.png",
      title: "쿼터파운더 치즈",
      describe: "Quarter Pounder with Cheese"
    },
    {
      index: "6",
      image: "./image/mc-single-06.png",
      title: "맥크리스피 디럭스 버거",
      describe: "McCrispy Deluxe Burger"
    },
    {
      index: "7",
      image: "./image/mc-single-07.png",
      title: "맥크리스피 클래식 버거",
      describe: "McCrispy Deluxe Burger"
    },
    {
      index: "8",
      image: "./image/mc-single-08.png",
      title: "맥스파이시 상하이버거",
      describe: "McSpicy Shanghai Burger"
    },
    {
      index: "9",
      image: "./image/mc-single-09.png",
      title: "1955 버거",
      describe: "1955 Burger"
    },
    {
      index: "10",
      image: "./image/mc-single-10.png",
      title: "맥치킨 모짜렐라",
      describe: "McChicken Mozzarella"
    },

    {
      index: "11",
      image: "./image/mc-single-11.png",
      title: "맥치킨",
      describe: "McChicken"
    },
    {
      index: "12",
      image: "./image/mc-single-12.png",
      title: "더블 불고기 버거",
      describe: "Double Bulgogi Burger"
    },
    {
      index: "13",
      image: "./image/mc-single-13.png",
      title: "에그 불고기 버거",
      describe: "Egg Bulgogi Burger"
    },
    {
      index: "14",
      image: "./image/mc-single-14.png",
      title: "불고기 버거",
      describe: "Bulgogi Burger"
    },
    {
      index: "15",
      image: "./image/mc-single-15.png",
      title: "슈슈 버거",
      describe: "Supreme Shrimp Burger"
    },
    {
      index: "16",
      image: "./image/mc-single-16.png",
      title: "슈비 버거",
      describe: "Shrimp Beef Burger"
    },
    {
      index: "17",
      image: "./image/mc-single-17.png",
      title: "베이컨 토마토 디럭스 버거",
      describe: "Bacon Tomato Deluxe Burger"
    },
    {
      index: "18",
      image: "./image/mc-single-18.png",
      title: "치즈 버거",
      describe: "Cheeseburger"
    },

    {
      index: "19",
      image: "./image/mc-single-19.png",
      title: "더블 치즈 버거",
      describe: "Double Cheeseburger"
    },
    {
      index: "20",
      image: "./image/mc-single-20.png",
      title: "트리플 치즈 버거",
      describe: "Triple Cheeseburger"
    },
    {
      index: "21",
      image: "./image/mc-single-21.png",
      title: "햄버거",
      describe: "Hamburger"
    }
  ];

  const SetMainCardList = [
    {
      index: "1",
      image: "./image/mc-set-01.png",
      title: "더블 비프 미트칠리 버거 세트",
      describe: "Double Beef Meat Chill Burger"
    },
    {
      index: "2",
      image: "./image/mc-set-02.png",
      title: "미트칠리 BLT 버거 세트",
      describe: "Meat Chill Blt Burger"
    },
    {
      index: "3",
      image: "./image/mc-set-03.png",
      title: "빅맥 세트",
      describe: "Big Mac"
    },
    {
      index: "4",
      image: "./image/mc-set-04.png",
      title: "더블 쿼터파운더 치즈 세트",
      describe: "Double Quarter Pounder with Cheese"
    },
    {
      index: "5",
      image: "./image/mc-set-05.png",
      title: "쿼터파운더 치즈 세트",
      describe: "Quarter Pounder with Cheese"
    },
    {
      index: "6",
      image: "./image/mc-set-06.png",
      title: "맥크리스피 디럭스 버거 세트",
      describe: "McCrispy Deluxe Burger"
    },
    {
      index: "7",
      image: "./image/mc-set-07.png",
      title: "맥크리스피 클래식 버거 세트",
      describe: "McCrispy Deluxe Burger"
    },
    {
      index: "8",
      image: "./image/mc-set-08.png",
      title: "맥스파이시 상하이버거 세트",
      describe: "McSpicy Shanghai Burger"
    },
    {
      index: "9",
      image: "./image/mc-set-09.png",
      title: "1955 버거 세트",
      describe: "1955 Burger"
    },
    {
      index: "10",
      image: "./image/mc-set-10.png",
      title: "맥치킨 모짜렐라 세트",
      describe: "McChicken Mozzarella"
    },

    {
      index: "11",
      image: "./image/mc-set-11.png",
      title: "맥치킨 세트",
      describe: "McChicken"
    },
    {
      index: "12",
      image: "./image/mc-set-12.png",
      title: "더블 불고기 버거 세트",
      describe: "Double Bulgogi Burger"
    },
    {
      index: "13",
      image: "./image/mc-set-13.png",
      title: "에그 불고기 버거 세트",
      describe: "Egg Bulgogi Burger"
    },
    {
      index: "14",
      image: "./image/mc-set-14.png",
      title: "불고기 버거 세트",
      describe: "Bulgogi Burger"
    },
    {
      index: "15",
      image: "./image/mc-set-15.png",
      title: "슈슈 버거 세트",
      describe: "Supreme Shrimp Burger"
    },
    {
      index: "16",
      image: "./image/mc-set-16.png",
      title: "슈비 버거 세트",
      describe: "Shrimp Beef Burger"
    },
    {
      index: "17",
      image: "./image/mc-set-17.png",
      title: "베이컨 토마토 디럭스 버거 세트",
      describe: "Bacon Tomato Deluxe Burger"
    },
    {
      index: "18",
      image: "./image/mc-set-18.png",
      title: "치즈 버거 세트",
      describe: "Cheeseburger"
    },

    {
      index: "19",
      image: "./image/mc-set-19.png",
      title: "더블 치즈 버거 세트",
      describe: "Double Cheeseburger"
    },
    {
      index: "20",
      image: "./image/mc-set-20.png",
      title: "트리플 치즈 버거 세트",
      describe: "Triple Cheeseburger"
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
              <span className="text-5xl py-6">버거</span>
              <span className="text-lg pb-2 font-['Nanum300']">
                빅맥에서 맥스파이시 상하이버거까지,
              </span>
              <span className="text-lg pb-2 font-['Nanum300']">
                주문 즉시 바로 조리해 더욱 맛있는 맥도날드의 다양한 버거를
                소개합니다.
              </span>
              <div className="flex pt-2 font-['Nanum300']">
                <button>Home</button>
                <div className="font-['Nanum300'] h-[6px] w-[6px] mx-2 mt-[8px] bg-yellow-400 rounded-full"></div>
                <button>Menu</button>
                <div className="font-['Nanum300'] h-[6px] w-[6px] mx-2 mt-[8px] bg-yellow-400 rounded-full"></div>
                <button>버거</button>
              </div>
            </div>
          </div>
          <img
            className=" h-[220px]"
            src="../image/mc-burger-banner.jpg"
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
              className={`${
                !selectedButton
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-black"
              }`}
            >
              단품메뉴
            </button>
            <button
              onClick={onClickButton}
              className={`${
                selectedButton
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-black"
              }`}
            >
              세트메뉴
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
        <main
          className={`w-min-screen m-[40px] ${!selectedButton ? "hidden" : ""}`}
        >
          <div className="mt-4 mb-4 flex gap-20 text-xl justify-center items-center">
            <button
              onClick={onClickButton}
              className={`${
                !selectedButton
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-black"
              }`}
            >
              단품메뉴
            </button>
            <button
              onClick={() => setSelectedButton(!selectedButton)}
              className={`${
                selectedButton
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-black"
              }`}
            >
              세트메뉴
            </button>
          </div>

          <div className="lg:ml-[20%] pt-4 pb-8 flex">
            <div className="bg-yellow-500 w-[5px] h-[5px] mt-[7px] mr-3 rounded-full"></div>
            20 Product
          </div>
          <section className="flex flex-col items-center">
            <div className="w-[1203px] grid grid-cols-3">
              {SetMainCardList.map((v, i) => {
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

export default MenuBurgerSingle;
