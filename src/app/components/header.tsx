import Link from "next/link";

export default function Header() {
  return (
    // <header>
    //   <nav className="p-4">
    //     <ul className="container flex gap-8">
    //       <li>
    //         <Link href="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link href="/responsive">scarfs</Link>
    //       </li>
    //       <li>
    //         <Link href="/responsive-2">pins</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <header className="sticky top-0 bg-white shadow-md z-10">
  <nav className="p-4">
    <ul className="container flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
      <li className="relative group">
        <Link href="/" className="px-4 py-2 transition-all duration-500 ease-in-out border-2 border-transparent group-hover:border-blue-500 group-hover:my-2 group-hover:px-6 group-hover:py-3 rounded-md">
          <span className="transition-all duration-500 ease-in-out group-hover:text-blue-500">Home</span>
        </Link>
      </li>
      <li className="relative group">
        <Link href="/responsive" className="px-4 py-2 transition-all duration-500 ease-in-out border-2 border-transparent group-hover:border-blue-500 group-hover:my-2 group-hover:px-6 group-hover:py-3 rounded-md">
          <span className="transition-all duration-500 ease-in-out group-hover:text-blue-500">Scarfs</span>
        </Link>
      </li>
      <li className="relative group">
        <Link href="/responsive-2" className="px-4 py-2 transition-all duration-500 ease-in-out border-2 border-transparent group-hover:border-blue-500 group-hover:my-2 group-hover:px-6 group-hover:py-3 rounded-md">
          <span className="transition-all duration-500 ease-in-out group-hover:text-blue-500">Pins</span>
        </Link>
      </li>
    </ul>
  </nav>
</header>

  


  );
}