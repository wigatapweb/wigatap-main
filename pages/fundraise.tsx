import Layout from "../components/layout"

const Fundraise = () => {
    return (
      <Layout>
      <section className="mb-4">
      <div className="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">Fundraise</h1>
              <p className="text-gray-600">
                Do you have a passion for fundraise and want to make a difference? Consider organizing a fundraising event or campaign on behalf of our charity. 
              </p>
            </div>
            <div className="lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">

                <form>
                  <p className="mb-6">To get started, please fill out the form below and we will contact you with more information.</p>
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
    </section>
    </Layout>
    )
  }
  
  export default Fundraise