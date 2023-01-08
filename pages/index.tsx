import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Showcase from '../components/showcase';
import CollectionSection from '../components/collections/section';
import StylesType from '../components/stylesType/stylesType';
import Articles from '../components/articles/articles';
import ContactInfo from '../components/contactInfo/contactInfo';
import Footer from '../components/footer';
import BottomNav from '../components/HOC/bottomNav';
import MobileFooter from '../components/mobileFooter';



const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Simple, Unique et Luxueuse." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        
        <section className="w-full hidden sm:block custom-laptop:px-[15rem]   px-3">
          <Showcase />
        </section>

        <CollectionSection />
        <section className='hidden sm:block  w-full'>
          <StylesType />
        </section>

        <section className='hidden sm:block mt-24'>
          <Articles />
        </section>

        <section className='hidden sm:block w-full mt-52'>
          <ContactInfo />
        </section>

        <section className='sm:block hidden mt-20'>
          <Footer />
        </section>

        <section className='sm:hidden'>
          <MobileFooter />
        </section>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <BottomNav>
      {page}
    </BottomNav>
  )
}



export default Home

