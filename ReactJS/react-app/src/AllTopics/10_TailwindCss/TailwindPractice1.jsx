const TailwindPractice1 = () => {
  return (
    <div>
      {/* <h1 className="bg-violet-900 text-white text-3xl rounded-4xl text-center">
        Tailwind Practice
      </h1>

      <button className="bg-green-800 text-white py-1 px-2.5 rounded-4xl">
        Submit
      </button> */}
      <nav className="bg-violet-900 p-2 text-white font-semibold md:bg-amber-600 md:text-5xl md:text-black lg:bg-pink-700 xl:bg-red-500 md:font-normal flex justify-between items-center">
        <div>Navbar</div>
        <ul className="gap-10 hidden md:flex">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default TailwindPractice1;
