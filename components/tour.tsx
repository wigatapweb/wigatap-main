import Link from "next/link"

const callouts = [
    {
      name: 'Kakum National Park',
      description: 'Dare to take on the thrilling adventure of walking over the 1150 feet long canopy walkway, suspended 130 feet above the forest floor, and witness the diverse wildlife including monkeys, birds, and butterflies along the way.',
      imageSrc: '/tour/kakum-park.jpg',
      imageAlt: 'Kakum national park in Ghana.',
    },
    {
      name: 'Umbrella Rock',
      description: 'Embark on a heart-pumping hike to the top of Umbrella Rock in Ghana, where a massive boulder perched on the edge of a cliff defies gravity, providing a natural umbrella for hikers.',
      imageSrc: '/tour/umbrella-rock.png',
      imageAlt: 'The umbrella rock in Ghana.',
    },
    {
      name: 'Waterfall',
      description: 'Experience the awe-inspiring beauty of nature on a thrilling trek to the majestic Kintampo Waterfall in Ghana, where the cascading waters tumble down a series of rocky steps, creating a mesmerizing sight and a refreshing misty breeze that invigorates hikers along the way.',
      imageSrc: '/tour/waterfall.jpg',
      imageAlt: 'The magnificent waterfall in Ghana.',
    },
]
  
  export default function Tour() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl mt-12 pt-4 pb-12 lg:max-w-none lg:py-12">
            <h2 className="font-bold text-gray-900 mt-4 text-center text-5xl mb-4 md:text-7xl">Tour Ghana</h2>
            <h2 className=" text-gray-900 mt-1 text-center text-lg md:text-2xl">We offer <span className="bg-orange-300 rounded-lg px-1">tourism opportunities</span> to people who wishes to explore and experience the historical foundation, sites and the lives of the people of Ghana</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 font-bold text-lg md:text-xl text-gray-900">
                      <span className="absolute inset-0" />
                      {callout.name}
                  </h3>
                  <p className="text-base text-gray-600">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center pb-12'>
            <Link className="inline-block px-7 py-3 md:mb-0 mr-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="link">Learn more</Link>
          </div>
        </div>
      </div>
    )
  }
  