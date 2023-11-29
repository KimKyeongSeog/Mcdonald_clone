import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <header className="bg-red-100 min-w-screen h-[140px] flex items-center justify-center">
        <img src="" alt="" className="h-[93px] w-[106px]" />
        <ul className="bg-blue-100 flex ml-[85px]">
          <li className="mr-[85px]">1</li>
          <li className="mr-[85px]">2</li>
          <li className="mr-[85px]">3</li>
          <li className="mr-[85px]">4</li>
        </ul>
        <div>
          <button className="w-[80px] h-[36px] bg-yellow-400 rounded-full">
            1
          </button>
          <button className="w-[80px] h-[36px] bg-yellow-400 rounded-full">
            1
          </button>
          <button className="w-[80px] h-[36px] bg-yellow-400 rounded-full">
            1
          </button>
        </div>
        <img src="" alt="" className="h-9 m-9 ml-[26px]" />
      </header>
      <div className="bg-green-300 min-w-screen h-[540px] pb-[30px]">
        slider
      </div>
      <div className="mb-[60px]">Mcdonald's LIVE</div>
      <main className="flex items-center justify-center">
        <div className="w-[1203px] grid grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <footer className="bg-black min-w-full h-[260px] flex items-center justify-center">
        <div className="bg-gray-300 w-[1168px] h-[260px] flex justify-between pt-[45px] pb-[55px]">
          <div className="flex">
            <ul className="bg-yellow-400 w-[190px] pt-2">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
            <ul className="bg-green-400 w-[363px] pt-2">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div className="bg-blue-400 w-[360px] h-[66px] flex items-center justify-center gap-4">
            <div className="bg-purple-100 w-10 h-10">1</div>
            <div className="bg-purple-100 w-10 h-10">1</div>
            <div className="bg-purple-100 w-10 h-10">1</div>
            <div className="bg-purple-100 w-10 h-10">1</div>
            <img className="w-[100px] h-[70px]" src="" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
