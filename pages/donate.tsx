import Layout from "../components/layout"

const Donate = () => {
    return (
      <Layout>
      <section className="mb-4">
      <div className="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">Donate</h1>
              <p className="text-gray-600 text-xl">
                Your donation helps us make a difference in the world. Thank you for your support!
              </p>
            </div>
            <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
              <h1 className="font-bold text-2xl">There are several ways you can make a donation.</h1>
              <div className="mt-4">
                <div className="flex justify-center"><span className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full">1</span></div>
                <h3 className="font-semibold text-lg">Donate online using credit card or paypal</h3>
              </div>
              <div className="mt-4">
                <div className="flex justify-center"><span className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full">2</span></div>
                <h3 className="font-semibold">Donate by check or bank transfer</h3>
                <p className="mt-2 font-medium">Account Number (Eco Bank)</p>
                <span>0163074529441901 <br />Swift Code: ECOCGHAC</span>
                <p className="mt-4 font-medium">Mobile Money</p>
                <span className="mt-2">MTN - 0245303229 <br /> Aitel Tigo - 0276045122</span>
              </div>
            </div>
            <div className="lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">

                <form>
                  <p className="mb-6">Please fill out the form below and we will contact you with more information.</p>
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
  
  export default Donate