const Header = () => {
  return (
    <header className="px-4 lg:px-16 xl:px-32 2xl:px-44 fixed w-full backdrop-blur-[2px] bg-gradient-to-b from-gray-100 to-gray-100/0 z-20 py-4 border-b-gray-300/10 border-b">
      <div className="flex justify-between">
        <nav className="flex text-lg text-slate-700 justify-start items-center gap-x-12">
          <a className="hidden lg:block font-fantasy text-2xl" href="/">
            Rorschach
          </a>
          <a className="hidden lg:block" href="/#about">
            About
          </a>
          <a className="hidden lg:block" href="/#skills">
            Skills
          </a>
          <a className="hidden lg:block" href="/#projects">
            Projects
          </a>
          <a className="hidden lg:block" href="/#hobbies">
            Hobbies
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;