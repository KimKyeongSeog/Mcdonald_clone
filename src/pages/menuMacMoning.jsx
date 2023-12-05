import MenuDropDown from "../components/MenuDropDown";
import TopButtons from "../components/TopButtons";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
import { useState } from "react";

const MenuMacMoning = () => {
  const MainCardList = [
    {
      index: "1",
      image: "./image/mc-moning1.png",
      title: "베이컨 토마토 에그 머핀",
      describe: "BLT Egg Muffin"
    },
    {
      index: "2",
      image: "./image/mc-moning2.png",
      title: "치킨 치즈 머핀",
      describe: "Chicken'n Cheese Muffin"
    },
    {
      index: "3",
      image: "./image/mc-moning3.png",
      title: "에그 맥머핀",
      describe: "Egg McMuffin"
    },
    {
      index: "4",
      image: "./image/mc-moning4.png",
      title: "베이컨 에그 맥머핀",
      describe: "Bacon Egg McMuffin"
    },
    {
      index: "5",
      image: "./image/mc-moning5.png",
      title: "소시지 에그 맥머핀",
      describe: "Sausage Egg McMuffin"
    },
    {
      index: "6",
      image: "./image/mc-moning6.png",
      title: "상하이 치킨 스낵랩",
      describe: "Shanghai Chicken Snack Wrap"
    },
    {
      index: "7",
      image: "./image/mc-moning7.png",
      title: "디럭스 브렉퍼스트",
      describe: "Deluxe Breakfast"
    },
    {
      index: "8",
      image: "./image/mc-moning8.jpg",
      title: "핫케익 3조각",
      describe: "Hotcakes 3pcs"
    },
    {
      index: "9",
      image: "./image/mc-moning9.png",
      title: "핫케익 2조각",
      describe: "Hotcakes 2pcs"
    }
  ];

  const SetMainCardList = [
    {
      index: "1",
      image: "./image/mc-moningset-01.png",
      title: "베이컨 토마토 에그 머핀 세트",
      describe: "BLT Egg Muffin Breakfast"
    },
    {
      index: "2",
      image: "./image/mc-moningset-02.png",
      title: "에그 맥머핀 콤보",
      describe: "Egg McMuffin Combo"
    },
    {
      index: "3",
      image: "./image/mc-moningset-03.png",
      title: "베이컨 에그 맥머핀 콤보",
      describe: "Bacon Egg McMuffin Combo"
    },
    {
      index: "4",
      image: "./image/mc-moningset-04.png",
      title: "소시지 에그 맥머핀 콤보",
      describe: "Sausage Egg McMuffin Combo"
    },
    {
      index: "5",
      image: "./image/mc-moningset-05.png",
      title: "치킨 치즈 머핀 세트",
      describe: "Chicken'n Cheese Muffin Extra Value Breakfast"
    },
    {
      index: "6",
      image: "./image/mc-moningset-06.png",
      title: "에그 맥머핀 세트",
      describe: "Egg McMuffin Extra Value Breakfast"
    },
    {
      index: "7",
      image: "./image/mc-moningset-07.png",
      title: "베이컨 에그 맥머핀 세트",
      describe: "Bacon Egg McMuffin Extra Value Breakfast"
    },
    {
      index: "8",
      image: "./image/mc-moningset-08.png",
      title: "소세지 에그 맥머핀 세트",
      describe: "Sausage egg McMuffin Extra Value Breakfast"
    },
    {
      index: "9",
      image: "./image/mc-moningset-09.png",
      title: "디럭스 블랙퍼스트 세트",
      describe: "Deluxe Breakfast Extra Value Breakfast"
    },
    {
      index: "10",
      image: "./image/mc-moningset-10.png",
      title: "핫케익 3조각",
      describe: "Hotcakes 3pcs"
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
            9 Product
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
            10 Product
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

export default MenuMacMoning;
