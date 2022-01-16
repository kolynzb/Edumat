import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const pageScrolled = () => {
    window.scrollY > 150 ? setShowBtn(true) : setShowBtn(false);
  };
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", pageScrolled);
  }, []);
  return (
    <button
      className="scrolltotop"
      onClick={handleScroll}
      style={{
        position: "fixed",
        visibility: `${showBtn ? "visible" : "hidden"}`,
        bottom: "20px",
        right: 20,
        width: 40,
        height: 40,
        borderRadius: " 50%",
        backgroundColor: "#E5C1B5",
        border: "none",
        zIndex: 1000,
        transition: "all 0.2s ease-in-out",
      }}
    >
      <svg
        styles={{
          color: "white",
          fontSize: 25,
        }}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
      </svg>
    </button>
  );
};

export default BackToTop;
