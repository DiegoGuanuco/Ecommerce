import Link from "next/link";

export const NavBar = () => {
  return (
    <ul className="w-full bg-white py-6 flex justify-between px-24">
      <Link href="/" className="bg-transparent text-black">
        Home
      </Link>
      <Link href="/" className="bg-transparent text-black">
        Products
      </Link>
      <Link href="/" className="bg-transparent text-black">
        Cart
      </Link>
      <Link href="/" className="bg-transparent text-black">
        Discounts
      </Link>
    </ul>
  );
};
