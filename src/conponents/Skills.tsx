
const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-[5%] lg:mx-40 relative h-auto pt-[4vh] min-h-screen transition-transform duration-200 ease-in-out fade-in"
    >
      <p className=" text-center text-gray-400 text-2xl">Explore My</p>
      <h1 className="text-center text-black font-bold text-5xl">Experience</h1>
      <div className="flex justify-start my-8 gap-8 flex-wrap ">
        <div className="p-6 flex-1 bg-white rounded-3xl border-gray-300 border-2 text-center flex-wrap">
          <h2 className="font-semibold text-gray-600 text-2xl mb-6">
            Frontend Development
          </h2>
          <div className="flex text-left flex-wrap flex-row gap-10 justify-around">
            <div className="flex flex-row items-center justify-around w-40 gap-2 flex-wrap">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">HTML</h3>
                <p className="text-gray-500">Familiar</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">Tailwind CSS</h3>
                <p className="text-gray-500">Familiar</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">JavaScript/ TypeScript</h3>
                <p className="text-gray-500">Intermediate</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">React</h3>
                <p className="text-gray-500">Intermediate</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">SASS</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <div className="w-8 h-8" />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg"></h3>
                <p className="text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex-1 bg-white rounded-3xl border-gray-300 border-2 text-center flex-wrap">
          <h2 className="font-semibold text-gray-600 text-2xl mb-6">
            Other Development
          </h2>
          <div className="flex text-left flex-wrap flex-row gap-8 justify-around">
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">C++</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">Python</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <img
                src="public/images/checkmark.png"
                alt="Experience icon"
                className="h-8"
              />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg">MySQL</h3>
                <p className="text-gray-500">Basic</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-40 gap-2">
              <div className="w-8 h-8" />
              <div className="w-20 flex flex-col gap-2">
                <h3 className="font-bold text-lg"></h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
