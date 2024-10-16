import { useEffect, useRef, useState } from "react";
import { Card, Carousel } from "./ui/apple-cards-carousel";

const Hobbies = () => {
  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want
                to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is
                ready to capture every thought.
              </p>
            </div>
          );
        })}
      </>
    );
  };
  const album = [
    {
      src: "/images/caodong.png",
      singer: "No Party for CaoDong",
      title: "The Servile",
      content: <DummyContent />,
      description:
        "Their music creates a massive impact, shattering everyone's preconceived notions of sound.",
      link: "https://zh.wikipedia.org/wiki/%E9%86%9C%E5%A5%B4%E5%85%92_(%E5%B0%88%E8%BC%AF)#",
    },
    {
      src: "/images/pink.png",
      singer: "Pink Floyd",
      title: "The Dark Side of the Moon",
      content: <DummyContent />,
      description:
        "The Dark Side of the Moon explores themes such as conflict, greed, time, death, and mental illness.",
      link: "https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon",
    },
    {
      src: "/images/velvet.png",
      singer: "the Velvet Underground & Nico",
      title: "The Velvet Underground & Nico",
      content: <DummyContent />,
      description:
        "The album features elements of avant-garde music incorporated into brash, minimal and groove-driven rock music",
      link: "https://en.wikipedia.org/wiki/The_Velvet_Underground_%26_Nico",
    },
    {
      src: "/images/abnormal.png",
      singer: "the Strokes",
      title: "The New Abnormal",
      content: <DummyContent />,
      description:
        "The New Abnormal is the sixth studio album by American rock band the Strokes, released on April 10, 2020, through Cult and RCA Records.",
      link: "https://en.wikipedia.org/wiki/The_New_Abnormal",
    },
    {
      src: "/images/greenday.png",
      singer: "Green Day",
      title: "American Idiot",
      content: <DummyContent />,
      description:
        "A concept album, dubbed a 'punk rock opera' by the band members, American Idiot follows the story of Jesus of Suburbia, a lower-middle-class American adolescent anti-hero.",
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

  useEffect(() => {
    if (carouselRefFirst.current) {
      carouselRefFirst.current.scrollLeft = carouselRefFirst.current.scrollWidth;
    }
  }, [currentIndex]);

  useEffect(() => {
    if (carouselRefSecond.current) {
      carouselRefSecond.current.scrollLeft = carouselRefSecond.current.scrollWidth;
    }
  }, [currentIndex]);

  return (
    <section
      id="hobbies"
      className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="p-6 rounded-3xl bg-slate-700 text-gray-50">
            <div className="flex justify-center items-center">
              <img src="/images/music-2.png" alt="music" className="rounded-xl mb-6" />
            </div>
            I love music, especially rock. I'm not a professional musician, but just an ordinary
            listener who simply enjoys and indulges in music.
            <br />
            <br />I have always believed that music has power. It has given me courage, hope, and
            even the motivation to continue living.
            <br />
            <br />
            Also, I play the guitar, although my skills are not great. I hope to improve in the
            future.
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

        {/* 右侧列 */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {/* Album 部分 */}
          <div className="p-6 rounded-3xl bg-white">
            <h2 className="text-3xl text-orange-500 font-bold mb-4">Album</h2>
            <p className="mb-4">
              Admittedly, it wasn't until last summer, influenced by Miss. R, that my listening
              habits began to gradually shift from listening to singles to listening to full albums.{" "}
              <strong>
                'The continuity of an album better reflects what the artist intends to convey.'
              </strong>
            </p>
            <p>Here are some albums that are very important to me:</p>
          </div>

          {/* Album Carousel */}
          <div className="overflow-hidden">
            <Carousel
              items={album.map((album, index) => (
                <AlbumCard key={album.src} album={album} />
              ))}
            />
          </div>

          {/* Singer 部分 */}
          <div className="p-6 rounded-3xl bg-white">
            <h2 className="text-3xl text-orange-500 font-bold mb-4">Singer</h2>
            <p className="mb-4">
              Anpu said during the Shi Mei concert,{" "}
              <strong>
                "The kind of singer you have is the kind of fans you'll have" "Shaking hands with
                you."
              </strong>{" "}
              They have given me a warm embrace at every stage of my life. Thank you.
            </p>
            <p>Here are some singers who are very important to me:</p>
          </div>

          {/* Singer Carousel */}
          <div className="overflow-hidden">
            <Carousel
              items={singers.map((singer, index) => (
                <SingerCard key={singer.src} singer={singer} />
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated AlbumCard component
const AlbumCard = ({ album }: { album: any }) => (
  <div className="w-64 h-64 rounded-xl bg-white overflow-hidden relative group">
    <img
      src={album.src}
      alt={`${album.singer} - ${album.title}`}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
      <a
        href={album.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl font-bold mb-2"
      >
        {album.title}
      </a>
      <p className="text-white text-sm mb-2">{album.singer}</p>
      <p className="text-white text-sm text-center">{album.description}</p>
    </div>
  </div>
);

// Updated SingerCard component
const SingerCard = ({ singer }: { singer: any }) => (
  <div className="w-64 h-64 rounded-xl bg-white overflow-hidden relative group">
    <img
      src={singer.src}
      alt={singer.singer}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
      <a
        href={singer.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl font-bold mb-2"
      >
        {singer.singer}
      </a>
      <p className="text-white text-sm text-center">{singer.description}</p>
    </div>
  </div>
);

export default Hobbies;
