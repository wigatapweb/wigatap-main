import type { NextPage } from "next";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Image from 'next/image'
import Article from "../components/articles";
import Donors from "../components/donors";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          <Article />
          <section>
            <h2 className="mb-4 text-center text-3xl md:text-7xl font-bold tracking-tighter leading-tight">
              Why You May Donate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-32 mb-16">
              <div className=' border rounded shadow-lg'>
                <div className="mb-5">
                  <Image src={'/donation-3.jpg'} width='1300' height='630' alt={''} />

                </div>
                <div  className=' p-2'>
                  <h3 className="text-xl font-semibold mb-1 leading-snug">
                  Honor a Special Memory of a Loved One
                  </h3>
                
                  <p className="leading-relaxed mb-4">Honoring the memory of a loved one is a beautiful way to keep their spirit alive. By making a donation in their name, you can do just that.</p>
                </div>
              </div>
              
              <div className=' border rounded shadow-lg'>
                <div className="mb-5">
                  <Image src={'/donation-1.jpg'} width='1300' height='630' alt={''} />

                </div>
                <div  className='px-2 '>
                  <h3 className="text-xl font-semibold mb-1 leading-snug">
                  Donate to Celeberate Your Wins
                  </h3>
                
                  <p className="leading-relaxed mb-4">We all have moments of triumph and success in our lives, and what better way to celebrate these victories than by paying it forward? You can extend the joy of your own success to others who may be in need. Your support can be a powerful reminder of the good that can come from hard work and determination.</p>
                </div>
            
              </div>
              {/* LAST */}
              <div className=' border rounded shadow-lg'>
                <div className="mb-5">
                  <Image src={'/donation-4.jpg'} width='1300' height='630' alt={''} />

                </div>
                <div  className='px-2 '>
                  <h3 className="text-xl font-semibold mb-1 leading-snug">
                  Donate to Make a Difference in the World
                  </h3>
                
                  <p className="leading-relaxed mb-4">In a world that can often feel overwhelming, it's easy to feel like one person can't make a difference. But that's simply not true. Your generosity can be a small but powerful step towards a better future for us all.</p>
                </div>
            
              </div>
              <Donors />
              {/* <section>
                <h2 className="mb-4 text-center text-3xl md:text-7xl font-bold tracking-tighter leading-tight">
                Gallery
                </h2> 
                <div className="container mx-auto px-4"> 
                  <section className="py-2 px-4">
                    <div className="flex flex-wrap -mx-4">
                      <div className="hidden md:block md:w-1/2 px-4">
                        <div className="h-full w-full bg-cover rounded shadow-md bg-[url('/logo.JPG')]" 
                        >
                        </div>
                      </div>
                      <div className="md:w-1/2 h-auto px-4">
                        <div className="mb-8"><img className="rounded shadow-md" src="/photo5.JPG" alt=""/></div>
                        <div><img className="rounded shadow-md" src="/photo4.JPG" alt=""/></div>
                      </div>
                    </div>
                  </section>
                            
                  <section className="py-8 px-4">
                    <div className="flex flex-wrap -mx-4">
                      <div className="md:w-1/2 px-4 mb-8 md:mb-0"><img className="rounded shadow-md" src="/photo2.JPG" alt=""/></div>
                      <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                        <img className="rounded shadow-md" src="/photo1.JPG" alt="" />
                        </div>
                    </div>
                  </section>
                  <div className='grid justify-center'>
                    <Link href="/" className='' >View more</Link>
                  </div>
                </div>
                
              </section> */}
            </div>
              <section className="overflow-hidden text-neutral-700">
              <h2 className="mb-4 text-center text-3xl md:text-7xl font-bold tracking-tighter leading-tight">
                Gallery
                </h2> 
                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                  <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="/photo1.JPG" />
                      </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="/photo2.JPG" />
                      </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo5.JPG" />
                      </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo4.JPG" />
                      </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo3.JPG" />
                      </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="photo7.JPG" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="grid justify-center mt-4">
                  <Link href={'/'}>View more</Link>
                </div> */}
              </section>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
