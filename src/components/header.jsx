const Header = () => {
  return (
    <header className="bg-rose-50 border-b border-rose-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 max-w-6xl">
        {/* title */}
        <h1 className="text-2xl font-bold text-rose-700">CreativeVault</h1>

        {/* mini nav */}
        <nav className="flex gap-6">
          <a
            href="#"
            className="text-rose-500 hover:text-rose-700 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-rose-500 hover:text-rose-700 transition duration-300"
          >
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
