import Link from 'next/link'
import Container from './container'

const Donors = () => {
  return (
    <div>
    <h2 className="mb-4 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
      Our Donors
    </h2>
    <div className="mb-4 mt-6 flex flex-wrap gap-4 justify-center items-center">
      <div className="flex justify-center flex-col items-center border rounded px-3 shadow-lg mb-1">
        <h3 className='font-semibold'>Mr Afred Twumasi</h3>
        <span className='tex-orange-400'>¢100/Month</span>
      </div>
      <div className="flex justify-center flex-col items-center border rounded px-3 shadow-lg mb-1">
        <h3 className='font-semibold'>Shedrack Mensah</h3>
        <span className='tex-orange-400'>¢200</span>
      </div>
      <div className="flex justify-center flex-col items-center border rounded px-3 shadow-lg mb-1">
        <h3 className='font-semibold'>Dr Asare Bediako</h3>
        <span className='tex-orange-400'>¢550/Month</span>
      </div>
      <div className="flex justify-center flex-col items-center border rounded px-3 shadow-lg mb-1">
        <h3 className='font-semibold'>Foster Frimpong</h3>
        <span className='tex-orange-400'>¢50</span>
      </div>
      <div className="flex justify-center flex-col items-center border rounded px-3 shadow-lg mb-1">
        <h3 className='font-semibold'>Rev Gyima Boafo</h3>
        <span className='tex-orange-400'>¢700/Month</span>
      </div>
    </div>
    <p className='text-center'>Our donors are very incredible at what their doing in the hope that one day, a kid, who cannot afford basic educational needs get the opportunity to become a meaningful member of our society.</p>
    <div className='flex justify-center mt-6'>
        <Link className="inline-block px-7 py-3 md:mb-0 mr-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/donate" role="link">Join our Donors</Link>
    </div>
  </div>
  )
}

export default Donors
