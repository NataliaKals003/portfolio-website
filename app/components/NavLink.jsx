import Link from "next/link";

const NavLink = ({ href, onClick, title }) => {
  const handleClick = (e) => {
    if (onClick && typeof onClick === "function") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      href={href}
      passHref
      onClick={handleClick}
      className="block py-2 pl-3 pr-4 text-gray-800 dark:text-white sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLink;
