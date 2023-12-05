import { useNavigate } from "react-router-dom";

const Header = () => {
  const movePage = useNavigate();

  function goMenu() {
    movePage("/menu/burger");
  }

  function goHome() {
    movePage("/");
  }

  return (
    <section className=" min-w-screen h-[140px] flex items-center justify-center border-gray-200 border-b-[1px]">
      <img
        onClick={goHome}
        src={`${process.env.PUBLIC_URL}/image/McLogo.jpg`}
        alt="logo"
        className="h-[93px] w-[106px]"
      />
      <ul className="flex ml-[85px] font-['Gothic']">
        <li
          onClick={goMenu}
          className="mr-[90px] pt-14 h-[140px] text-base hover:border-b-[3px] border-yellow-500"
        >
          Menu
        </li>
        <li className="mr-[90px] pt-14 h-[140px] text-base hover:border-b-[3px] border-yellow-500">
          Store
        </li>
        <li className="mr-[90px] pt-14 h-[140px] text-base hover:border-b-[3px] border-yellow-500">
          What's New
        </li>
        <li className="mr-[90px] pt-14 h-[140px] text-base hover:border-b-[3px] border-yellow-500">
          Story
        </li>
      </ul>
      <div className="text-white font-['Gothic'] px-2 flex items-center justify-center gap-1">
        <button className="w-[80px] h-[36px] text-[12px] bg-[#db0007] rounded-full pt-1">
          임차문의
        </button>
        <button className="w-[80px] h-[36px] text-[12px] bg-[#d87e00] rounded-full pt-1">
          RECRUIT
        </button>
        <button className="w-[80px] h-[36px] text-[12px] bg-[#264a36] rounded-full pt-1">
          ENG
        </button>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/image/mc-magnifier.jpg`}
        alt="magnifier"
        className="h-9 m-9 ml-[26px]"
      />
    </section>
  );
};

export { Header };
