import Link from "next/link"
import Layout from "../components/layout"

const Gallery = () => {
    return (
      <Layout>
      <section className="overflow-hidden text-neutral-700">
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                  <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex  flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="/donation-3.jpg" />
                      </div>
                    </div>
                    <div className="flex  flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="/photo2.JPG" />
                      </div>
                    </div>
                    <div className="flex  flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo5.JPG" />
                      </div>
                    </div>
                    <div className="flex  flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo4.JPG" />
                      </div>
                    </div>
                    <div className="flex  flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo3.JPG" />
                      </div>
                    </div>
                    <div className="flex  flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo7.JPG" />
                      </div>
                    </div>
                  </div>
                </div>
           
              </section>
    </Layout>
    )
  }
  
  export default Gallery