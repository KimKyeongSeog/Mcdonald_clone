const Card = ({ image, describe }) => {
  return (
    <div className="ml-[35px] mb-[35px] w-[366px] h-[438px] font-[''] rounded-2xl overflow-hidden bg-blue-300 ">
      <img className="w-[366px] h-[300px]" src={image} alt="" />
      <div className="w-[306px]">{describe}</div>
    </div>
  );
};
export default Card;
