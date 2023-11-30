import BannerSilder from "./components/BannerSilder";
import Card from "./components/Card";
import MenuDropDown from "./components/MenuDropDown";
import TopButtons from "./components/TopButtons";
import Footer from "./components/Footer";

const App = () => {
  const CardList = [
    {
      index: "1",
      image: "./image/mc-card-01.jpg",
      describe: "매콤빠삭하게 레벨 업!"
    },
    {
      index: "2",
      image: "./image/mc-card-02.jpg",
      describe: "칠리 치즈 후라이&토마토 치킨 스낵랩"
    },

    {
      index: "3",
      image: "./image/mc-card-03.jpg",
      describe: "갓성비 간식 맛집, 맥도날드 해피 스낵!"
    },
    {
      index: "4",
      image: "./image/mc-card-04.jpg",
      describe: "맥도날드 M오더"
    },
    {
      index: "5",
      image: "./image/mc-card-05.jpg",
      describe: "빠삭하게 빠져드는 맛, 맥크리스피!"
    },
    {
      index: "6",
      image: "./image/mc-card-06.jpg",
      describe: "갓 구워내 따뜻하고 신선한 \n베이컨 토마토 에그 머핀!"
    },
    {
      index: "7",
      image: "./image/mc-card-07.jpg",
      describe: "상콤달콤! \nNEW 자두 천도복숭아 칠러 출시!"
    },
    {
      index: "8",
      image: "./image/mc-card-08.jpg",
      describe: "맥도날드와 함께 성장할 \n크루와 매니저를 찾습니다"
    },
    {
      index: "9",
      image: "./image/mc-card-09.jpg",
      describe: "첫 적립시 2000 포인트 제공! \n새로워진 마이 맥도날드 리워드!"
    },
    {
      index: "10",
      image: "./image/mc-card-10.jpg",
      describe: "우리가 엄격해질수록 \n버거는 더 맛있어지니까!"
    },
    {
      index: "11",
      image: "./image/mc-card-11.jpg",
      describe: "0.1초에 한잔! \n매일 마시는 커피를 더 맛있게"
    },
    {
      index: "12",
      image: "./image/mc-card-12.jpg",
      describe:
        "전문 코치들의 체계적이고 전문적인 \n교육을 통해 지역사회 행복에 기여합니다"
    },
    {
      index: "13",
      image: "./image/mc-card-13.jpg",
      describe: "귀하의 토지, 건물에 맥도날드를 유치\n하세요!"
    }
  ];

  return (
    <div className="relative font-['Nanum700']">
      <header>
        <MenuDropDown />
      </header>
      <div>
        <BannerSilder />
      </div>
      <div className="fixed mx-[85%] my-[-10%] md:visible">
        <TopButtons />
      </div>
      <div className="mt-2 mb-16 font-['Gothic'] text-3xl lg:ml-[20%]">
        Mcdonald's LIVE
      </div>
      <main className="flex items-center justify-center">
        <div className="w-[1203px] grid grid-cols-3">
          {CardList.map((v, i) => {
            return (
              <Card index={v.index} image={v.image} describe={v.describe} />
            );
          })}
        </div>
      </main>
      <div className="font-['Nanum'] bg-[#292929] min-w-full h-[260px] flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default App;
