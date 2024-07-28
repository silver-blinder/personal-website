const Hobbies = () => {
  const images = [
    {
      src: "public/images/noparty.jpg",
      singer: "No Party for CaoDong",
      title: "The Servile",
      desciption:
        "'Their music creates a massive impact, shattering everyone's preconceived notions of sound.'",
      link: "https://zh.wikipedia.org/wiki/%E9%86%9C%E5%A5%B4%E5%85%92_(%E5%B0%88%E8%BC%AF)#",
    },
    {
      src: "public/images/pink.png",
      singer: "Pink Floyd",
      title: "The Dark Side of the Moon",
      desciption:
        "'The Dark Side of the Moon explores themes such as conflict, greed, time, death, and mental illness.'",
      link: "https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon",
    },
    {
      src: "public/images/velvet.png",
      singer: "the Velvet Underground & Nico",
      title: "The Velvet Underground & Nico",
      desciption:
        "'The album features elements of avant-garde music incorporated into brash, minimal and groove-driven rock music'",
      link: "https://en.wikipedia.org/wiki/The_Velvet_Underground_%26_Nico",
    },
  ];
  return (
    <section
      id="hobbies"
      className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="p-6 rounded-3xl bg-slate-700 text-gray-50">
            <div className="flex justify-center items-center">
              <img
                src="public/images/music-2.png"
                alt="music"
                className="rounded-xl mb-6"
              />
            </div>
            I love music, especially rock. I'm not a professional musician, but
            just an ordinary listener who simply enjoys and indulges in music.
            <br />
            <br />I have always believed that music has power. It has given me
            courage, hope, and even the motivation to continue living.
            <br />
            <br />
            Also, I play the guitar, although my skills are not great. I hope to
            improve in the future.
          </div>
          <div className="bg-white p-6 rounded-3xl">
            <h2 className="text-lg font-semibold mb-2">My Gears:</h2>
            <ul>
              <li>
                Electric Guitar:{" "}
                <a
                  href="https://www.cajonmacau.com/products/gtrs-s800-%E9%9B%BB%E5%90%89%E4%BB%96"
                  className="bg-gray-600 px-2 rounded-full text-gray-50 ml-2 whitespace-nowrap"
                >
                  GTRS S800
                </a>
              </li>
              <li>
                Effects Processor:{" "}
                <a
                  href="https://www.hotoneaudio.com/products/multi-effects/ampero"
                  className="bg-gray-600 px-2 rounded-full text-gray-50 ml-2 whitespace-nowrap"
                >
                  Ampero
                </a>
              </li>
            </ul>
            <img
              src="public/images/guitar.png"
              alt="guitar"
              className="bg-gray-200 mt-8 rounded-lg transition-transform hover:scale-105 cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://www.cajonmacau.com/products/gtrs-s800-%E9%9B%BB%E5%90%89%E4%BB%96")
              }
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-4 bg">
          <div className="p-6 rounded-3xl flex flex-col lg:flex-row gap-4 basis-1/3 bg-white">
            <div className="bg-gray-800 rounded-3xl p-6 text-gray-50 flex items-center justify-center grow">
              <h2 className="text-3xl text-orange-500 font-bold">Album</h2>
            </div>
            <div className="max-h-52 font-sans rounded-xl relative overflow-hidden min-w-[200px]">
              <div className="w-auto h-full text-wrap items-center pt-2">
                Admittedly, it wasn't until last summer, influenced by Ms. R,
                that my listening habits began to gradually shift from listening
                to singles to listening to full albums.{" "}
                <strong>
                  'The continuity of an album better reflects what the artist
                  intends to convey.'
                </strong>
                <br />
                <br />
                Here are some albums that are very important to me:
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl flex flex-col lg:flex-row bg-white gap-4 basis-2/3">
            {images.map((image, index) => (
              <div
                key={index}
                className="h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]"
              >
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white group relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 scale-105"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                    <div className="opacity-0 group-hover:opacity-100 overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-800/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col">
                      <a
                        className="font-fantasy font-bold text-2xl mb-4 text-center"
                        target="_blank"
                        rel="external"
                        href={image.link}
                      >
                        {image.title}
                      </a>
                      <p className="text-lg font-bold text-center mb-2">
                        {image.singer}
                      </p>
                      <p>{image.desciption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-3xl flex flex-col lg:flex-row gap-4 basis-1/3">
            <div className="bg-gray-800 rounded-3xl p-6 text-gray-50 flex items-center justify-center grow">
              <h2 className="text-3xl text-orange-500 font-bold">Singer</h2>
            </div>
            <div className="max-h-52 font-sans rounded-xl relative overflow-hidden min-w-[200px]">
              <div className="w-auto h-full text-wrap items-center pt-2">
                Admittedly, it wasn't until last summer, influenced by Ms. R,
                that my listening habits began to gradually shift from listening
                to singles to listening to full albums.{" "}
                <strong>
                  'The continuity of an album better reflects what the artist
                  intends to convey.'
                </strong>
                <br />
                <br />
                Here are some albums that are very important to me:
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl flex flex-col lg:flex-row bg-white gap-4 basis-2/3">
            <div className="h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]">
              <div className="w-full h-full relative">
                <div className="w-full h-full text-white group relative">
                  <img
                    src="public/images/noparty.jpg"
                    alt="caodong"
                    className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 scale-105"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <div className=" opacity-0 group-hover:opacity-100 overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-800/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col">
                    <p className="font-fantasy font-bold text-2xl mb-4 text-center">
                      No Party For CaoDong
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]">
              <div className="w-full h-full relative">
                <div className="w-full h-full text-white group relative">
                  <img
                    src="public/images/noparty.jpg"
                    alt="caodong"
                    className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 scale-105"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <div className=" opacity-0 group-hover:opacity-100 overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-800/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col">
                    <p className="font-fantasy font-bold text-2xl mb-4 text-center">
                      No Party For CaoDong
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]">
              <div className="w-full h-full relative">
                <div className="w-full h-full text-white group relative">
                  <img
                    src="public/images/noparty.jpg"
                    alt="caodong"
                    className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 scale-105"
                    loading="lazy"
                    width="200"
                    height="200"
                  />
                  <div className=" opacity-0 group-hover:opacity-100 overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-800/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col">
                    <p className="font-fantasy font-bold text-2xl mb-4 text-center">
                      No Party For CaoDong
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
