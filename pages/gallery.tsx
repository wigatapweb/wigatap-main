import Layout from "../components/layout"

const products = [
  {
    id: 1,
    description: '',
    href: '#!',
    imageSrc: '/morePhotos/donation-1.JPG',
    imageAlt: 'Reverend Boafo donating an item',
  },
  {
    id: 2,
    description: '',
    href: '#!',
    imageSrc: '/morePhotos/donation-2.JPG',
    imageAlt: 'Wigatap foundation donation',
  },
  {
    id: 3,
    description: '',
    href: '#!',
    imageSrc: '/morePhotos/donation-3.JPG',
    imageAlt: 'Books donation',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/morePhotos/pastorial.JPG',
    imageAlt: 'Reverend Boafo',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/morePhotos/donation-4.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/morePhotos/donation-5.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/photo1.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/photo2.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/photo3.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/photo4.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/photo5.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/donation-1.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/donation-2.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    description: '',
    href: '#!',
    imageSrc: '/donation-3.jpg',
    imageAlt: '',
  },
  // More products...
]

export default function MorePhotos() {
  return (
    <Layout>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  </Layout>
  )
}
