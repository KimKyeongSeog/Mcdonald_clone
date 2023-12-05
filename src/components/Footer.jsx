import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[1168px] h-[260px] flex justify-between pt-[45px] pb-[55px]">
      <div className="flex">
        <ul className="w-[190px] pt-2 text-white">
          <li className="text-yellow-300">개인정보 처리방침</li>
          <li className="mt-1">위치정보 이용약관</li>
          <li className="mt-1">사이트맵</li>
          <li className="mt-1">임차문의</li>
          <li className="mt-1">고객문의</li>
          <li className="mt-1">인재채용</li>
        </ul>
        <ul className="text-gray-400 w-[363px] pt-2 text-sm">
          <li>한국맥도날드(유)</li>
          <li className="mt-1">대표이사: 김기원</li>
          <li className="mt-1">사업자등록번호: 101-81-26409</li>
          <li className="mt-1">전화주문: 1600-5252</li>
          <li className="mt-1">
            COPYRIGHT 2019 ⓒ ALL RIGHTS RESERVED BT McDonald's
          </li>
        </ul>
      </div>
      <div className="w-[360px] h-[66px] flex items-center justify-center gap-4">
        <div className="bg-white h-10 w-10 pl-1 pt-1  rounded-full overflow:hidden">
          <FaFacebookF className="h-8 w-8 " />
        </div>
        <div className="bg-white h-10 w-10 pl-1 pt-1 rounded-full overflow:hidden">
          <FaInstagram className="h-8 w-8" />
        </div>
        <div className="bg-white h-10 w-10 pl-1 pt-1  rounded-full overflow:hidden">
          <FaYoutube className="h-8 w-8" />
        </div>
        <div className="bg-white h-10 w-10 rounded-full overflow:hidden">
          <img className="mx-2 mt-2 h-6 w-6" src="./image/mc-dot.jpg" alt="" />
        </div>
        <img
          className="w-[100px] h-[70px]"
          src={`${process.env.PUBLIC_URL}/image/mc-wa.jpg`}
          alt="과학기술정보통신부"
        />
      </div>
    </div>
  );
};

export default Footer;
