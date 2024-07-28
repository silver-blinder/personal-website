import { useEffect, useRef } from "react";
import "./App.css";
import { About, Header, Hobbies, Home, Projects, Skills } from "./conponents";

import WhiteCircle from "/public/images/white-circle.png";

function App() {
  const whiteCircleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 恢复滚动位置
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    // 保存滚动位置
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sessionStorage.setItem("scrollPosition", scrollY.toString());

      if (whiteCircleRef.current) {
        const transform = whiteCircleRef.current.style.transform;
        const translateXMatch = transform.match(/translateX\(([-\d.]+)px\)/);
        const currentTranslateX = translateXMatch
          ? parseFloat(translateXMatch[1])
          : 0;

        const translateXFactor =
          currentTranslateX < -625 || currentTranslateX > 100
            ? scrollY * 0.4 - 1250
            : scrollY * -0.4;

        whiteCircleRef.current.style.transform = `translateX(${translateXFactor}px) translateY(${
          scrollY * 1
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="relative z-[1] px-4 pt-[4.5rem] fill-content md:px-0">
        <div className="main-class">
          <div
            className="absolute top-32 right-32"
            style={{
              transform:
                "translateX(-45.8px) translateY(4625px) translateZ(0px)",
            }}
            ref={whiteCircleRef}
          >
            <img
              alt=""
              loading="lazy"
              width="525"
              height="517"
              decoding="async"
              data-nimg="1"
              className="z-[1]"
              style={{ color: "transparent" }}
              src={WhiteCircle}
              srcSet={`${WhiteCircle}?w=640&q=75 1x, ${WhiteCircle}?w=1080&q=75 2x`}
            />
          </div>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Hobbies />
        </div>
      </main>
    </>
  );
}

export default App;
