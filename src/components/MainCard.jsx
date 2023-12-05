const MainCard = ({ title, image, describe }) => {
  return (
    <div className=" w-[352px] h-[366px] font-['nanum700'] rounded-xl hover:border-[1.5px] hover:border-yellow-500 text-center pt-6 pl-6 mb-8">
      <img
        className=" w-[306px]"
        src={`${process.env.PUBLIC_URL}/${image}`}
        alt=""
      />
      <div>
        <div className="my-4 text-xl w-[306px] text-center ">{title}</div>
        <div className=" text-sm text-gray-400 font w-[306px]">{describe}</div>
      </div>
    </div>
  );
};
export default MainCard;
