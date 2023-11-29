const Card = ({ image, describe }) => {
  return (
    <div className="ml-[35px] mb-[35px] w-[366px] h-[438px] font-['nanum700'] rounded-xl border-b-[1px] border-gray-300 overflow-hidden">
      <img
        className="sm:w-[180px] md:w-[250px] lg:w-[366px]"
        src={image}
        alt=""
      />
      <div className="m-8 text-lg w-[306px]">{describe}</div>
    </div>
  );
};
export default Card;
