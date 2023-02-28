import Link from "next/link"
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter();
  function isActive(link: string) {
    return router.pathname === link
  }
  
  return (
    <nav className=" border-b sticky top-0 z-[1000] py-1 bg-white md:hidden flex items-center justify-between">
    <div>
        <Link href={"/donate"} className={isActive('/donate') ? 'text-orange-400 inline-block border-r px-6 py-2.5 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-black-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200' : 'inline-block px-6 py-2.5 border-r bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-black-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200'}>Donate
        </Link>
    </div>
    <div>
        <Link href="/volunteer" className={isActive('/volunteer') ? 'text-orange-400 inline-block px-6 py-2.5 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-black-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200' : 'inline-block px-6 py-2.5 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-black-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200'}>Volunteer
        </Link>
    </div>
    <div>
        <Link href="/fundraise" className={isActive('/fundraise') ? 'text-orange-400 border-l inline-block px-6 py-2.5 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-black-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out' : 'border-l inline-block px-6 py-2.5 bg-transparent text-black-600 font-medium text-xs leading-tight uppercase rounded hover:text-black-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200'}>Fundraise
        </Link>
    </div>
  </nav>
  )
}

export default Nav