import Head from 'next/head';
import { Inter } from '@next/font/google';
import BottomNav from '../components/HOC/bottomNav';
import Showcase from '../components/showcase';
import MobileHeader from '../components/mobileHeader';
import StylesType from '../components/stylesType/stylesType';

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
                <MobileHeader />
                <section className='px-4'>
                    <Showcase />
                </section>
                <StylesType />
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

