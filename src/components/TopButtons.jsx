import { useState, useEffect } from "react";

const TopButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <div className="w-[121px] h-[262px]  items-center">
        <button>
          <img
            className="w-[121px] h-[121px] m-6"
            src={`${process.env.PUBLIC_URL}/image/mc-button-01.jpg`}
            alt=""
          />
        </button>
        <button>
          <img
            className="w-[121px] h-[121px] m-6"
            src={`${process.env.PUBLIC_URL}/image/mc-button-02.jpg`}
            alt=""
          />
        </button>
        <button className="ml-14" onClick={scrollToTop}>
          <img src="./image/mc-top.jpg" alt="" />
        </button>
      </div>
    )
  );
};

export default TopButtons;
