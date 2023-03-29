import Container from "../components/container"
import Layout from "../components/layout"

const callouts = [
  {
    name: 'Kakum National Park',
    description: 'A brief description of the program Rev Boafo embarked on.',
    imageSrc: '/outreach/@wedding.JPG',
    imageAlt: 'Outreach program by Rev Boafo',
  },
  {
    name: 'Umbrella Rock',
    description: 'A brief description of the program Rev Boafo embarked on.',
    imageSrc: '/outreach/@church-1.jpg',
    imageAlt: 'Outreach program by Rev Boafo.',
  },
  {
    name: 'Waterfall',
    description: 'A brief description of the program Rev Boafo embarked on.',
    imageSrc: '/outreach/@women-church.jpg',
    imageAlt: 'Outreach program by Rev boafo.',
  },
]

const Volunteer = () => {
    return (
      <Layout>
        <Container>
        <section className="mb-4">
        <div className="px-6 py-12 md:px-12  text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
          <div className="w-[300px] md:w-[400px] md:h-[400px] h-[200] h-[100] object-cover m-auto">
              <img src="/morePhotos/prophet-ministry-logo.jpg" className="" alt="" />
            </div>
            <div className="">
              <div className="lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl text-center font-bold tracking-tight mb-6">Outreach & Missions</h1>
              </div>
              </div>
            </div>
        </div>
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
                    {/* <h3 className="mt-6 font-bold text-lg md:text-xl text-gray-900">
                        <span className="absolute inset-0" />
                        {callout.name}
                    </h3> */}
                    <p className="text-base text-gray-600 mt-2">{callout.description}</p>
                  </div>
                ))}
            </div>
          </section>

        </Container>
    </Layout>
    )
  }
  
  export default Volunteer