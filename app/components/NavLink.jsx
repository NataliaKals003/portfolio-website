import Link from "next/link";

const NavLink = ({ href, onClick, title }) => {
  return (
    <Link
      href={href}
      onClick={onClick} // Use onClick directly on the Link component
      className="block py-2 pl-3 pr-4 text-gray-800 dark:text-white sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
