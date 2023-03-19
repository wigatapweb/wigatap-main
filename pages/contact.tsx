import Layout from "../components/layout"

const Contact = () => {
    return (
      <Layout>
      <section className="mb-4">
      <div className="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6">Contact Us</h1>
              <p className="text-gray-600 text-center">
                We are always happy to hear from our supporters and answer any questions you may have. Please fill out the form below with your message or question!
              </p>
            </div>
            <div className="lg:mb-0">
              <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">

                <form>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-6">
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="First name"/>
                    </div>
                    <div className="mb-6">
                      <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" placeholder="Last name"/>
                    </div>
                    <textarea
                      className="
                        lg:w-full
                        form-control
                        block
                        w-full
                        mb-6
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
                      "
                      id="exampleFormControlTextarea13"
                      placeholder="Message"
                      >
                    </textarea>
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
  
  export default Contact