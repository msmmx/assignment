import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ⬆️ TOP
      </button>
    )
  );
}

export default ScrollToTopButton;
