const About = () => {
  return (
    <section
      id="about"
      className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-36 md:py-48"
    >
      <p className=" mt-0 text-center text-gray-400 text-2xl">
        Use Some Tags To
      </p>
      <h2 className="text-center text-black font-bold text-5xl mb-8">
        Know About Me
      </h2>
      <div className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll-one hover:[animation-play-state:paused]">
          <div className="bg-purple-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            <p className="text-xl ">#Location: Shanghai, China</p>
            <p className="text-xl ">#Grade: Sophomore</p>
          </div>
          <div className="bg-blue-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            <p className="text-lg text-wrap ">
              #School: Nanjing University of Posts and Telecommunications
            </p>
            <p className="text-lg ">#Major: Computer Science and Technology</p>
          </div>
          <div className="bg-green-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            <p className="text-xl ">#CET-4/6: Passed</p>
            <p className="text-xl ">#NCRE-2: Passed</p>
          </div>
          <div className="bg-purple-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            <p className="text-xl ">#Location: Shanghai, China</p>
            <p className="text-xl ">#Grade: Sophomore</p>
          </div>
          <div className="bg-blue-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            <p className="text-lg ">
              #School: Nanjing University of Posts and Telecommunications
            </p>
            <p className="text-lg ">#Major: Computer Science and Technology</p>
          </div>
          <div className="bg-green-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            <p className="text-xl ">#CET-4/6: Passed</p>
            <p className="text-xl ">#NCRE-2: Passed</p>
          </div>
        </div>
      </div>
      <div className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll-two hover:[animation-play-state:paused]">
          <div className="bg-red-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            Second Layer - Card 1
          </div>
          <div className="bg-yellow-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            Second Layer - Card 2
          </div>
          <div className="bg-indigo-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            Second Layer - Card 3
          </div>
          <div className="bg-red-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            Second Layer - Card 1
          </div>
          <div className="bg-yellow-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            Second Layer - Card 2
          </div>
          <div className="bg-indigo-500 w-80 h-40 rounded-lg shadow-lg p-4 flex flex-col justify-around items-center text-white">
            Second Layer - Card 3
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
