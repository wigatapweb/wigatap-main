import Layout from "../components/layout"
import Container from '../components/container'

const About = () => {
  return (
    <Layout>
        <div>
          <h2 className="mb-4 mt-8 text-center text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Our History
          </h2>
          <div className="flex flex-wrap justify-center">
          <img
          src="founder.JPG"
          className="h-auto max-w-full"
          alt="..." />
              <em className='text-sm text-slate-500'>Rev Dr Boafo Yaw Sarfo</em>
          </div>
          <p className='text-center mt-2'>At the outset, the primary vision of the charity foundation was to extend a helping hand to the less privileged and orphaned children by providing them with access to educational resources. The ultimate goal was to address the significant disparities in education in Ghana and promote a more equitable distribution of opportunities for young people. The foundation recognized the critical role that access to educational materials plays in this regard, as it can significantly influence students' academic performance and future prospects.
          </p>
          <p className='text-center mt-2'>
          As the foundation's work has progressed, it has become increasingly clear that there is a broader need to support the development of the whole child, beyond just their academic pursuits. Therefore, the foundation has evolved its vision to encompass a more holistic approach to supporting children's growth and development. This expanded vision includes promoting and nurturing children's natural talents and potentials by providing them with the necessary tools and resources to explore and develop their interests fully.
          </p>

          <p className='text-center mt-2'>
          One of the key ways that the foundation is working towards this goal is by supplying exercise books and other critical educational materials to students in underserved communities. By providing these resources, the foundation hopes to not only support academic achievement but also encourage children to pursue their passions and interests. Through this work, the foundation aims to promote a culture of lifelong learning and personal growth, where children can explore their talents and develop the skills they need to succeed in life.
          </p>
      </div>
    </Layout>
  )
}

export default About
