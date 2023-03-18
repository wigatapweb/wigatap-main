import Layout from "../components/layout"
import Link from 'next/link'

const callouts = [
  {
    name: 'Elmina Castle',
    description: "Elmina Castle in Ghana is a living museum of memories that spans centuries, from the depths of colonialism to the harrowing experiences of enslaved captives who passed through its 'Gates of No Return.' As you walk in the footsteps of your ancestors, you'll be transported back in time, rekindling their stories and reawakening their spirits. A visit to Elmina Castle is a powerful and emotional journey that connects you with the heart of Ghana's history and the enduring legacy of its people.",
    imageSrc: '/tour/Elmina-Castle.jpeg',
    imageAlt: 'The Elmina castle in Ghana.',
  },
  {
    name: 'Addae Kese',
    description: "Unlock the secrets of Ghana's most legendary and revered kingdom, the Ashanti, and immerse yourself in a world of vibrant culture and ancient tradition. Witness the awe-inspiring spectacle of the Golden Stool, a sacred symbol of divine kingship, during the dazzling Addae Kese festival, and bask in the magic and wonder of a land where history, spirituality, and culture intertwine. A tour of the Ashanti Kingdom promises to be a life-changing experience, one that will ignite your senses, touch your soul, and leave an indelible mark on your heart.",
    imageSrc: '/tour/addae-kese.jpeg',
    imageAlt: 'The Addae Kese Festival Ghana.',
  },
  {
    name: 'Lake Bosomtwe',
    description: "Lake Bosomtwe is a stunning natural wonder, a sparkling crater lake in Ghana's heartland that offers breathtaking vistas of serene waters, lush hills, and verdant foliage. Its beauty and mystique have captivated visitors for generations, making it a must-see destination for those seeking adventure, relaxation, or simply a glimpse of Ghana's pristine landscape.",
    imageSrc: '/tour/ghana-lake-bosomtwe.jpeg',
    imageAlt: 'Lake Bosomtwe in Ghana.',
  },
  {
    name: 'Manhyia Palace',
    description: "The Manhyia Royal Palace stands as a magnificent testament to Ghana's regal heritage, a grand palace that has been home to the Ashanti Kingdom's royals for centuries. Steeped in history and culture, this impressive edifice is a living embodiment of the kingdom's legacy, with richly decorated interiors, royal regalia, and priceless artifacts that offer a glimpse into the kingdom's storied past. Visitors to the palace are treated with a dazzling display of Ashanti culture and tradition, with regal processions, colorful ceremonies, and captivating performances that leave a lasting impression on the heart and mind. To explore the Manhyia Royal Palace is to unlock the secrets of Ghana's royal history, to experience the majesty and splendor of a kingdom that has captivated the world for generations.",
    imageSrc: '/tour/manhyia-palace.jpeg',
    imageAlt: 'The Manhyia Palace Ghana.',
  },
]

const Tourgh = () => {
    return (
      <Layout>
      <section className="mb-4 bg-gray-100">
      <div className="px-6 py-12 border-b md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">Tour Ghana</h1>
              <p className="text-gray-600">
              Embarking on a journey to Ghana unlocks a world of endless adventures, where every step taken leads to awe-inspiring natural wonders and heart-racing experiences that leave a lasting impression. 
              </p>
            </div>
            <div className="lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">

                <form>
                  <p className="mb-6">If you have any question or want to 
                  <span className="bg-orange-300 rounded-lg px-1">make enquiries</span>, please provide your information below or <a className="underline" href="/contact">Contact us.</a></p>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="First name"/>
                    </div>
                    <div className="mb-6">
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="Last name"/>
                    </div>
                    <div className="mb-6">
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="Phone number or email"/>
                    </div>
                    
                  </div>
                  <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-6 w-full bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl mt-12 pt-2 pb-12 lg:max-w-none lg:py-12">
            <h2 className="font-bold text-gray-900 text-center text-5xl mb-4 md:text-7xl">More places you can <br/> visit</h2>
            
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 md:gap-y-6 lg:space-y-0">
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
            <Link className="inline-block px-7 py-3 md:mb-0 mr-0 md:mr-2 font-medium text-sm underline leading-snug" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/" role="link"> Back to home page</Link>
          </div>
        </div>
      </div>
      </section>
    </Layout>
    )
  }
  
  export default Tourgh