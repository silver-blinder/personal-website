const Projects = () => {
  const projects = [
    {
      image: "public/images/project-1.png",
      title: "Personal website",
      description: (
        <>
          It's my personal website, where you can know me from every aspects. It
          features <strong>rich content and a beautiful layout</strong> . Hope
          you will like it.
        </>
      ),
      technologies: (
        <>
          <strong>Vite + React, TypeScript, and Tailwind CSS</strong>
        </>
      ),
      github: "https://github.com/silver-blinder/personal-website",
      liveDemo: "https://rgram-social-media.vercel.app/sign-in",
    },
    {
      image: "public/images/project-2.png",
      title: "Travel Blog",
      description: (
        <>
          It is my personal travel blog, featuring{" "}
          <strong>
            dynamic pagination and recordings of those precious mermories
          </strong>
          , , and it will continue updating...
        </>
      ),
      technologies: (
        <>
          <strong>Vite + React, JavaScript, Tailwind CSS</strong>
        </>
      ),
      github: "https://github.com/silver-blinder/travel-blog",
      liveDemo: "https://github.com/silver-blinder/travel-blog",
    },
    {
      image: "public/images/project-3.png",
      title: "Social Media App",
      description: (
        <>
          Like mainstream social media applications, it covers almost all basic
          features such as <strong>login and registration</strong>;{" "}
          <strong>creating</strong>, <strong>editing</strong>,{" "}
          <strong>liking</strong>, and <strong>bookmarking posts</strong> ;{" "}
          <strong>social function such as Explore and People</strong> ...
        </>
      ),
      technologies: (
        <>
          <strong>
            Vite + React, TypeScript, React Query, and Tailwind CSS
          </strong>
          . The backend platform used is{" "}
          <strong>Appwrite Cloud Platform</strong>.
        </>
      ),
      github: "https://github.com/silver-blinder/SocialMediaApp",
      liveDemo: "https://rgram-social-media.vercel.app/sign-in",
    },
  ];

  return (
    <section id="projects" className="relative py-12 px-3 lg:px-[5%] transition-transform duration-200 ease-in-out fade-in">
      <p className="text-center text-gray-400 text-2xl">Browse My</p>
      <h1 className="text-center text-black font-bold text-5xl font-sans">
        Recent Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-16 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 flex-1 p-6 bg-white border rounded-2xl border-gray-400"
          >
            <h2 className="text-3xl font-bold text-black flex justify-center">
              {project.title}
            </h2>
            <div className="gap-8 mt-1 flex justify-center flex-col lg:flex-initial items-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl w-auto h-auto cursor-pointer transition-transform hover:scale-105"
                onClick={() => (window.location.href = project.liveDemo)}
              />
              <div className="flex flex-col text-wrap justify-center">
                <p className="text-2xl font-bold text-gray-500">Description:</p>
                <p className="mt-2 pb-4 border-b-zinc-950 border-b-2">
                  {project.description}
                </p>
                <p className="text-2xl font-bold text-gray-500 mt-4">
                  Technologies:
                </p>
                <p className="mt-2">{project.technologies}</p>
              </div>
            </div>
            <div className="flex justify-center gap-10 mt-4">
              <button
                className="font-semibold transition-all duration-300 p-4 w-32 rounded-2xl border border-gray-800 bg-transparent hover:bg-gray-800 hover:text-white"
                onClick={() => (window.location.href = project.github)}
              >
                Github
              </button>
              <button
                className="font-semibold transition-all duration-300 p-4 w-32 rounded-2xl border border-gray-800 bg-transparent hover:bg-gray-800 hover:text-white"
                onClick={() => (window.location.href = project.liveDemo)}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
