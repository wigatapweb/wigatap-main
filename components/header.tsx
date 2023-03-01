import Link from 'next/link'
import Nav from './nav'
// import Nav from './nav'
import Image from 'next/image'


type Props = {
  preview?: boolean
}

const Header = ({ preview }: Props) => {
  return (
    <>
      <div className='bg-white z-50 border-b'>
        <div className='shadow flex justify-between items-center py-2 px-3 text-center text-sm'>
          <Link href="/" className='uppercase flex flex-col'>
            <Image src={'/logo.JPG'} alt={'wigatap logo'} width={50} height={50} />
            {/* <span className='text-2xl font-bold mt-0'>Wiga 
              <span className='text-orange-400'>tap</span>
            </span>
            <span className='font-medium text-[10px] leading-tight uppercase'>Foundation</span> */}
          </Link>
          <div>
            <Link href={'/contact'} className='inline-block px-7 py-3 md:mb-0 mr-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug capitalize rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/contact" role="link"'>Contact Us</Link>
          </div>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default Header
