import Alert from './header'
import Footer from './footer'
import Header from './header'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className="">
        {/* <Alert preview={preview} /> */}
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
