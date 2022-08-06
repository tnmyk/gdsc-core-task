import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-8 px-[10%]">
      <div className="flex items-center gap-x-6 text-sm font-medium text-gray-500">
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="" width="40px" />
          </a>
        </Link>
        <Link href="/">
          <a>Vector</a>
        </Link>
        <Link href="/">
          <a>Photos</a>
        </Link>
        <Link href="/">
          <a>PSD</a>
        </Link>
        <Link href="/">
          <a>Video</a>
        </Link>
        <button className="text-gray-700">More</button>
      </div>
      <div>
        <button className="px-4 py-2 rounded border">+ Submit</button>
      </div>
    </nav>
  );
};

export default Navbar;
