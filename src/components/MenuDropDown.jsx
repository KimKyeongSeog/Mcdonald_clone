import { useState } from "react";
import { Header } from "./Header";

const MenuDropDown = () => {
  const [hoverHeader, setHoverheader] = useState(false);

  const mouseHover = () => {
    setHoverheader(true);
  };

  const mouseLeave = () => {
    setHoverheader(false);
  };
  return (
    <div className="relative">
      <div
        className="cursor-pointer"
        onMouseEnter={mouseHover}
        onMouseLeave={mouseLeave}
      >
        <Header />
      </div>
      {hoverHeader && (
        <div className="absolute z-10 top-full bg-white min-w-full justify-center">
          <div className="flex font-['nanum'] w-[620px] pt-4 pb-12 sm:md:ml-[0%] md:ml-[9.5%] lg:ml-[28.7%]">
            <ul className="w-[150px] flex flex-col pt-1 gap-2 text-[16px] text-gray-500 hover:text-black hover:border-b-0 border-black">
              <li className="pt-2">버거</li>
              <li className="pt-2">맥런치</li>
              <li className="pt-2">맥모닝</li>
              <li className="pt-2">해피 스낵</li>
              <li className="pt-2">사이드 & 디저트</li>
              <li className="pt-2">맥카페 & 음료</li>
              <li className="pt-2">해피밀</li>
            </ul>
            <ul className="w-[150px] flex flex-col pt-1 gap-2 text-[16px] text-gray-500 hover:text-black hover:border-b-0 border-black">
              <li className="pt-2">매장찾기</li>
              <li className="pt-2">맥딜리버리</li>
              <li className="pt-2">맥드라이브</li>
              <li className="pt-2">임차문의</li>
            </ul>
            <ul className="w-[150px] flex flex-col pt-1 gap-2 text-[16px] text-gray-500 hover:text-black hover:border-b-0 border-black">
              <li className="pt-2">프로모션</li>
              <li className="pt-2">새로운 소식</li>
              <li className="pt-2">이달의 해피밀</li>
            </ul>
            <ul className="w-[170px] flex flex-col pt-1 gap-2 text-[16px] text-gray-500 hover:text-black hover:border-b-0 border-black">
              <li className="pt-2">브랜드 소개</li>
              <li className="pt-2">사회적 책임과 지원</li>
              <li className="pt-2">맥도날드 품질 이야기</li>
              <li className="pt-2">맥도날드 사람들</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropDown;
