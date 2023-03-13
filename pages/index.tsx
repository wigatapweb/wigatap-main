import type { NextPage } from "next";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Image from 'next/image'
import Article from "../components/articles";
import Donors from "../components/donors";
import Link from "next/link";
import About from "./about";
import Tour from "../components/tour";
import Photos from "../components/submitBtn";
import ResponsiveImageWithText from "../components/exp";
import Slideshow from "../components/intro";

const callouts = [
  {
    title: 'Honor a special memory of a loved one',
    description: 'Honoring the memory of a loved one a beautiful way to keep their spirit alive. By making a donation in their name, you can do just that.',
    imageSrc: '/donation-1.jpg',
    imageAlt: 'Prophet donating items to students.',
  },
  {
    title: 'Donate to celebrate your wins',
    description: 'We all have moments of triumph and success in our lives, and what better way to celebrate these victories than by paying it forward? You can extend the joy of your own success to others who may be in need.',
    imageSrc: '/donation-3.jpg',
    imageAlt: 'Prohpet giving out books.',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <Slideshow />
          {/* <Intro /> */}
          <Article />
          <section>
            <h2 className="mb-4 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Why You May Donate
            </h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.title} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className='absolute bottom-0 top-0 w-full bg-black bg-opacity-40 text-white p-6'>
                    <h3 className="mt-6 font-bold text-2xl md:text-3xl">
                        <span className="absolute inset-0" />
                        {callout.title}
                    </h3>
                    <p className="text-base">{callout.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <ResponsiveImageWithText /> */}
              <Donors />
              <Photos />
              {/* <section className="overflow-hidden text-neutral-700">
              <h2 className="mb-4 text-center text-3xl md:text-7xl font-bold tracking-tighter leading-tight">
                Gallery
                </h2> 
                <div className="container mx-auto py-2 lg:px-32 lg:pt-12">
                  <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                      <div className="w-full p-1 md:p-2">
                        <img
                          alt="gallery"
                          className="block h-full w-full rounded-lg object-cover object-center"
                          src="/donation-3.jpg" />
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
                <div className="grid justify-center mt-4">
                  <Link href={'/gallery'} className='text-green-400'>View more photos</Link>
                </div>
              </section> */}
              <Tour />
              <section>
                <h2 className="mb-4 md:mb-12 mt-8 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                  Founder's Story
                </h2>
                <div className=" grid md:grid-cols-2 md:gap-4 items-cente">
                <div className="flex justify-center items-center flex-col">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                    src="/founder.JPG"
                    className="h-full w-full object-cover object-center"
                    alt="..."
                    width={1200}
                    height={900}
                    />
                  </div>
                  <em className='md:hidden text-sm text-slate-500 mt-1'>Rev Dr Boafo Yaw Sarfo</em>
                </div>
                  <div>
                    <p className='text-center mt-2'>The Wigatap Foundation originated from Rev. Boafo's Prophet Ministries. With a vision to distribute educational and Biblical resources to the less privileged in Ghanaian society, he was moved with passion and drive to reach out to school children who are unable to afford the basic educational resources. Thus, after careful consideration, he established the non-profit organization known as the Wigatap Foundation, an acronym for "With God All Things Are Possible."</p>
                  </div>
                </div>
              </section>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
