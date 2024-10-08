import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-6xl mx-auto items-center">
        <Link href="/" className="text-white hover:text-gray-300">
          <h1 className="text-xl font-bold">Home</h1>
        </Link>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link href="/home" className=" text-white hover:text-gray-300">
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/schema/one-of"
              className="text-white  hover:text-gray-300"
            >
              OneOf Example
            </Link>
          </li>
          <li>
            <Link
              href="/schema/any-of"
              className="text-white  before:hover:text-gray-300"
            >
              AnyOf Example
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
