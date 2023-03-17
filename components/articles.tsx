import Link from 'next/link'

const Article = () => {
  return (
    <section>
    <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8 mb-8 md:mb-28">
      <div>
        <div className="flex items-center">
          </div>
            <h3 className="text-1sm lg:text-xl font-semibold leading-normal">
              Bringing the Joy of Reading to Underprivileged Students
            </h3>
            <div className="flex items-center">
              <Link className="text-green-500 mr-2" href={'/articles/article_01'}>Read more</Link>
              <div className="text-green-600">&rarr;</div>
            </div>
          <div className="mb-3 md:mb-0 text-sm text-slate-400">
        </div>
      </div>
      {/* -break */}
      <div>
        <div className="flex items-center">
          </div>
            <h3 className="text-1sm lg:text-xl font-semibold leading-normal">
              The 5 pillars of our foundation
            </h3>
            
            <div className="flex items-center">
              <Link className="text-green-500 mr-2" href={'/articles/article_02'}>Read more</Link>
              <div className="text-green-600">&rarr;</div>
            </div>
          <div className="mb-3 md:mb-0 text-sm text-slate-400">
        </div>
      </div>
      {/* break */}
      {/* <div>
        <div className="flex items-center">
          </div>
            <h3 className="text-1sm lg:text-xl font-semibold leading-normal">
                Donating [number] of books to students at [school]
            </h3>
            
            <div className="flex items-center">
              <Link className="text-green-500 mr-2" href={'/articles/article_03'}>Read more</Link>
              <div className="text-green-600">&rarr;</div>
            </div>
          <div className="mb-3 md:mb-0 text-sm text-slate-400">
        </div>
      </div> */}
      {/* break */}
      <div>
        <div className="flex items-center">
          </div>
            <h3 className="text-1sm lg:text-xl font-semibold leading-normal">
                Our core values, goals and vision for the foundation
            </h3>
           
            <div className="flex items-center">
              <Link className="text-green-500 mr-2" href={'/articles/article_04'}>Read more</Link>
              <div className="text-green-600">&rarr;</div>
            </div>
          <div className="mb-3 md:mb-0 text-sm text-slate-400">
        </div>
      </div>

    </div>
  </section>
  )
}

export default Article
