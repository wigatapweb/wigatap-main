import type { NextPage } from "next";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Image from 'next/image'
import Article from "../components/articles";
import Donors from "../components/donors";

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
 
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
