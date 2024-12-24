function About() {
  return (
    <section
      id="about"
      className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 py-36 md:py-48 transition-transform duration-200 ease-in-out fade-in"
    >
      <p className=" mt-0 text-center text-gray-400 text-2xl">
        Use Some Tags To
      </p>
      <h2 className="text-center text-black font-bold text-5xl mb-8">
        Know About Me
      </h2>
      <div className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll-one hover:[animation-play-state:paused]">
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-green-800 ">
            <p className="text-xl text-white ">#Location: Shanghai, China</p>
            <p className="text-xl text-white  ">#Grade: Sophomore</p>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-red-300 ">
            <p className="text-xl text-white  ">#GMail: xluo8105@gmail.com</p>
            <p className="text-xl text-white  ">
              #Phone Number: +86 17773427124
            </p>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-purple-800 ">
            <p className="text-lg text-wrap text-white  ">
              #School: Nanjing University of Posts and Telecommunications
            </p>
            <p className="text-lg text-white  ">
              #Major: Computer Science and Technology
            </p>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-blue-800 ">
            <p className="text-xl text-white  ">#CET-4/6: Passed</p>
            <p className="text-xl text-white  ">#NCRE-2: Passed</p>
          </div>

          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-green-800 ">
            <p className="text-xl text-white  ">#Location: Shanghai, China</p>
            <p className="text-xl text-white  ">#Grade: Sophomore</p>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-red-300 ">
            <p className="text-xl text-white  ">#GMail: xluo8105@gmail.com</p>
            <p className="text-xl text-white  ">
              #Phone Number: +86 17773427124
            </p>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-purple-800 ">
            <p className="text-lg text-white  ">
              #School: Nanjing University of Posts and Telecommunications
            </p>
            <p className="text-lg text-white  ">
              #Major: Computer Science and Technology
            </p>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col justify-around bg-blue-800 ">
            <p className="text-xl text-white  ">#CET-4/6: Passed</p>
            <p className="text-xl text-white  ">#NCRE-2: Passed</p>
          </div>
        </div>
      </div>
      <div className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll-two hover:[animation-play-state:paused]">
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1 bg-red-800 ">
            <a
              href="https://music.163.com/#/user/home?id=429211086"
              className="h-auto flex flex-col"
            >
              <div className="flex text-white gap-2 items-center justify-between">
                <p className="text-lg font-bold">核糖体</p>
                <div className="text-md flex justify-around items-center text-gray-200">
                  <img
                    src="/images/wyy.png"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <p className="text-md text-gray-200">
                The music app I've been using since middle school records my
                favorite music styles from each period, filled with memories.
              </p>
            </a>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1 bg-blue-500 ">
            <a
              href="https://github.com/silver-blinder"
              className="h-auto flex flex-col"
            >
              <div className="flex text-white gap-2 items-center justify-between">
                <p className="text-lg font-bold">silver-blinder</p>
                <div className="text-md flex justify-around items-center text-gray-200">
                  <img
                    src="/images/github-mark-white.png"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <p className="text-md text-gray-200">
                It records my technical updates and open-source projects I'm
                interested in.
              </p>
            </a>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1 bg-green-500 ">
            <a
              href="https://www.douban.com/people/169216456/?_i=214817863Sunps"
              className="h-auto flex flex-col"
            >
              <div className="flex text-white gap-2 items-center justify-between">
                <p className="text-lg font-bold">风流倜傥夜无邪</p>
                <div className="text-md flex justify-around items-center text-gray-200">
                  <img
                    src="/images/douban.png"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <p className="text-md text-gray-200">
                It keeps track of the movies and TV shows I've watched, along
                with some reviews, though the records are incomplete.
              </p>
            </a>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1 bg-red-800 ">
            <a
              href="https://music.163.com/#/user/home?id=429211086"
              className="h-auto flex flex-col"
            >
              <div className="flex text-white gap-2 items-center justify-between">
                <p className="text-lg font-bold">核糖体</p>
                <div className="text-md flex justify-around items-center text-gray-200">
                  <img
                    src="/images/wyy.png"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <p className="text-md text-gray-200">
                The music app I've been using since middle school records my
                favorite music styles from each period, filled with memories.
              </p>
            </a>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1 bg-blue-500 ">
            <a
              href="https://github.com/silver-blinder"
              className="h-auto flex flex-col"
            >
              <div className="flex text-white gap-2 items-center justify-between">
                <p className="text-lg font-bold">silver-blinder</p>
                <div className="text-md flex justify-around items-center text-gray-200">
                  <img
                    src="/images/github-mark-white.png"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <p className="text-md text-gray-200">
                It records my technical updates and open-source projects I'm
                interested in.
              </p>
            </a>
          </div>
          <div className="h-[170px] w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1 bg-green-500">
            <a
              href="https://www.douban.com/people/169216456/?_i=214817863Sunps"
              className="h-auto flex flex-col"
            >
              <div className="flex text-white gap-2 items-center justify-between">
                <p className="text-lg font-bold">风流倜傥夜无邪</p>
                <div className="text-md flex justify-around items-center text-gray-200">
                  <img
                    src="/images/douban.png"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <p className="text-md text-gray-200">
                It keeps track of the movies and TV shows I've watched, along
                with some reviews, though the records are incomplete.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
