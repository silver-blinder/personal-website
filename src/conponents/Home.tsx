import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Home = () => {
  const [hoveredOption, setHoveredOption] = useState("");
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    // 显示第一行
    setShowFirst(true);
    // 等待第一行动画完成，然后显示第二行
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 3000); // 确保这个时间与 typing 动画持续时间相匹配

    return () => clearTimeout(timer);
  }, []);

  const options = [
    { href: "/#about", text: "In-college student" },
    { href: "/#skills", text: "Front-end developer" },
    { href: "/#projects", text: "Traveler" },
    { href: "/#hobbies", text: "Music lover" },
  ];

  return (
    <section
      id="home"
      className="mt-8 min-w-0 max-w-screen overflow-hidden lg:mt-0 lg:h-dvh lg:min-h-[900px] transition-transform duration-200 ease-in-out fade-in flex items-center justify-center"
    >
      <div className="relative mx-auto flex size-full min-w-0 flex-col items-center justify-center lg:flex-row lg:max-w-6xl lg:px-4">
        <div className="flex w-full justify-center lg:w-1/2 mt-[120px] lg:mt-0 h-[15rem] lg:h-auto">
          <CardContainer>
            <CardBody className="p-8 relative bg-slate-100 rounded-3xl">
              <CardItem translateZ="50">
                <p className="text-lg font-bold">My name is:</p>
                <h1 className="z-10 relative px-2 text-orange-400 font-bold text-5xl md:text-6xl whitespace-nowrap my-2 text-center ">
                  Rorschach
                </h1>
              </CardItem>
              <CardItem
                translateZ="60"
                className="w-full pt-4 text-md md:text-xl leading-tight text-end"
              >
                <p className="text-lg mb-4 text-start font-bold">I&apos;m a:</p>

                {options.map((option) => (
                  <div
                    key={option.text}
                    className={`hover:scale-110 transition-transform duration-200 ${
                      hoveredOption && hoveredOption !== option.text ? "opacity-30" : "opacity-100"
                    }`}
                    onMouseEnter={() => setHoveredOption(option.text)}
                    onMouseLeave={() => setHoveredOption("")}
                  >
                    <a href={option.href} className="whitespace-nowrap">
                      {option.text}
                    </a>
                  </div>
                ))}
              </CardItem>
              <CardItem translateZ="100">
                <div className="mt-10">
                  <p
                    className={`font-bold text-3xl typewriter ${
                      showFirst ? "visible" : "invisible"
                    }`}
                  >
                    Nice to meet you👋
                  </p>
                </div>
                <div className="mt-3 whitespace-nowrap flex">
                  <p
                    className={`font-bold text-3xl typewriter ${showSecond ? "visible" : "hidden"}`}
                  >
                    Feel free to contact me !
                  </p>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="flex items-center justify-center w-full mt-5 lg:mt-0 lg:w-1/2">
          <div className="relative max-w-full lg:max-w-2xl">
            <div className="lg:size-[300px] size-[200px] mt-24 lg:mt-0">
              <img
                src="/images/profile.jpg"
                alt="profile"
                className="aspect-square rounded-full border border-slate-200 dark:border-neutral-800 w-full"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
