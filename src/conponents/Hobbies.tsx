import { useEffect, useRef, useState } from "react";

const Hobbies = () => {
  const album = [
    {
      src: "/images/caodong.png",
      singer: "No Party for CaoDong",
      title: "The Servile",
      description:
        "'Their music creates a massive impact, shattering everyone's preconceived notions of sound.'",
      link: "https://zh.wikipedia.org/wiki/%E9%86%9C%E5%A5%B4%E5%85%92_(%E5%B0%88%E8%BC%AF)#",
    },
    {
      src: "/images/pink.png",
      singer: "Pink Floyd",
      title: "The Dark Side of the Moon",
      description:
        "'The Dark Side of the Moon explores themes such as conflict, greed, time, death, and mental illness.'",
      link: "https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon",
    },
    {
      src: "/images/velvet.png",
      singer: "the Velvet Underground & Nico",
      title: "The Velvet Underground & Nico",
      description:
        "'The album features elements of avant-garde music incorporated into brash, minimal and groove-driven rock music'",
      link: "https://en.wikipedia.org/wiki/The_Velvet_Underground_%26_Nico",
    },
    {
      src: "/images/abnormal.png",
      singer: "the Strokes",
      title: "The New Abnormal",
      description:
        "The New Abnormal is the sixth studio album by American rock band the Strokes, released on April 10, 2020, through Cult and RCA Records.",
      link: "https://en.wikipedia.org/wiki/The_New_Abnormal",
    },
    {
      src: "/images/greenday.png",
      singer: "Green Day",
      title: "American Idiot",
      description:
        "'A concept album, dubbed a 'punk rock opera' by the band members, American Idiot follows the story of Jesus of Suburbia, a lower-middle-class American adolescent anti-hero.'",
      link: "https://en.wikipedia.org/wiki/American_Idiot",
    },
  ];

  const singers = [
    {
      src: "/images/anpu.png",
      singer: "Anpu",
      description:
        "'Anpu's music often features profound life experiences and emotional expressions, which are deeply loved by listeners.'",
      link: "https://zh.wikipedia.org/wiki/%E5%AE%89%E6%BA%A5",
    },
    {
      src: "/images/lana_del_rey.png",
      singer: "Lana Del Rey",
      description:
        "'Lana Del Rey's music is known for its stylized cinematic quality, its themes of tragic romance, glamour, and melancholia.'",
      link: "https://en.wikipedia.org/wiki/Lana_Del_Rey",
    },
    {
      src: "/images/frank_ocean.png",
      singer: "Frank Ocean",
      description:
        "'Frank Ocean is known for his avant-garde style and unconventional production techniques, which have been highly influential in contemporary music.'",
      link: "https://en.wikipedia.org/wiki/Frank_Ocean",
    },
    {
      src: "/images/eason_chan.png",
      singer: "Eason Chan",
      description:
        "'Eason Chan is hailed as one of the representatives of Mandopop, with his music widely popular and spanning multiple genres.'",
      link: "https://zh.wikipedia.org/wiki/%E9%99%B3%E5%A5%95%E8%BF%85",
    },
    {
      src: "/images/john_lennon.png",
      singer: "John Lennon",
      description:
        "'John Lennon was an English singer, songwriter, and peace activist who co-founded the Beatles, the most commercially successful band in the history of popular music.'",
      link: "https://en.wikipedia.org/wiki/John_Lennon",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRefFirst = useRef<HTMLDivElement>(null);
  const carouselRefSecond = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex < album.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (carouselRefFirst.current) {
      carouselRefFirst.current.scrollLeft =
        carouselRefFirst.current.scrollWidth;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carouselRefSecond.current) {
      carouselRefSecond.current.scrollLeft =
        carouselRefSecond.current.scrollWidth;
    }
  }, [currentIndex]);

  return (
    <section
      id="hobbies"
      className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32 transition-transform duration-200 ease-in-out fade-in"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="p-6 rounded-3xl bg-slate-700 text-gray-50">
            <div className="flex justify-center items-center">
              <img
                src="/images/music-2.png"
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
              src="/images/guitar.png"
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
                Admittedly, it wasn't until last summer, influenced by Miss. R,
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

          <div
            className="p-6 rounded-3xl flex flex-col lg:flex-row bg-white gap-6 basis-2/3 overflow-x-scroll"
            ref={carouselRefFirst}
          >
            {album.slice(0, currentIndex + 2).map((image, index) => (
              <div
                key={index}
                className="max-h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]"
              >
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white group relative">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 group-hover:scale-105"
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
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {currentIndex < album.length - 3 ? (
              <div
                className="max-h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px] group cursor-pointer"
                onClick={handleNext}
              >
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white relative">
                    <img
                      src={album[(currentIndex + 2) % album.length].src}
                      alt="Next"
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover: scale-105"
                      loading="lazy"
                      width="200"
                      height="200"
                      style={{ filter: "blur(10px)" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-black opacity-0 group-hover:opacity-100">
                      <p>Next</p>
                      <p className="text-sm">(click to show more)</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]">
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white group relative">
                    <img
                      src={album[(currentIndex + 2) % album.length].src}
                      alt={album[(currentIndex + 2) % album.length].title}
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 group-hover:scale-105"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                    <div className="opacity-0 group-hover:opacity-100 overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-800/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col">
                      <a
                        className="font-fantasy font-bold text-2xl mb-4 text-center"
                        target="_blank"
                        rel="external"
                        href={album[(currentIndex + 2) % album.length].link}
                      >
                        {album[(currentIndex + 2) % album.length].title}
                      </a>
                      <p className="text-lg font-bold text-center mb-2">
                        {album[(currentIndex + 2) % album.length].singer}
                      </p>
                      <p>
                        {album[(currentIndex + 2) % album.length].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 rounded-3xl flex flex-col lg:flex-row gap-4 basis-1/3">
            <div className="bg-gray-800 rounded-3xl p-6 text-gray-50 flex items-center justify-center grow">
              <h2 className="text-3xl text-orange-500 font-bold">Singer</h2>
            </div>
            <div className="max-h-52 font-sans rounded-xl relative overflow-hidden min-w-[200px]">
              <div className="w-auto h-full text-wrap items-center pt-2">
                Anpu said during the Shi Mei concert,{" "}
                <strong>
                  "The kind of singer you have is the kind of fans you'll have"
                  "Shaking hands with you."
                </strong>{" "}
                They have given me a warm embrace at every stage of my life.
                Thank you.
                <br />
                <br />
                Here are some singers who are very important to me:
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded-3xl flex flex-col lg:flex-row bg-white gap-6 basis-2/3 overflow-x-scroll"
            ref={carouselRefSecond}
          >
            {singers.slice(0, currentIndex + 2).map((image, index) => (
              <div
                key={index}
                className="max-h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]"
              >
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white group relative">
                    <img
                      src={image.src}
                      alt={image.singer}
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 group-hover:scale-105"
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
                        {image.singer}
                      </a>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {currentIndex < singers.length - 3 ? (
              <div
                className="max-h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px] group cursor-pointer"
                onClick={handleNext}
              >
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white relative">
                    <img
                      src={singers[(currentIndex + 2) % singers.length].src}
                      alt="Next"
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover: scale-105"
                      loading="lazy"
                      width="200"
                      height="200"
                      style={{ filter: "blur(10px)" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-black opacity-0 group-hover:opacity-100">
                      <p>Next</p>
                      <p className="text-sm">(click to show more)</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-h-64 font-sans rounded-xl bg-white relative overflow-hidden min-w-[200px]">
                <div className="w-full h-full relative">
                  <div className="w-full h-full text-white group relative">
                    <img
                      src={singers[(currentIndex + 2) % singers.length].src}
                      alt={singers[(currentIndex + 2) % singers.length].singer}
                      className="w-auto h-full m-auto object-cover transition-opacity duration-300 group-hover:opacity-90 group-hover:scale-105"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                    <div className="opacity-0 group-hover:opacity-100 overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-800/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col">
                      <a
                        className="font-fantasy font-bold text-2xl mb-4 text-center"
                        target="_blank"
                        rel="external"
                        href={singers[(currentIndex + 2) % singers.length].link}
                      >
                        {singers[(currentIndex + 2) % singers.length].singer}
                      </a>
                      <p>
                        {
                          singers[(currentIndex + 2) % singers.length]
                            .description
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
