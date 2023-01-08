import Head from 'next/head';
import { Inter } from '@next/font/google';
import BottomNav from '../components/HOC/bottomNav';
import StoreHeader from '../components/storeHeader';
import ArticleCard from '../components/articles/articleCard';
import MobileContactInfo from '../components/contactInfo/mobileContactInfo';

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
                <StoreHeader />
                <ArticleCard />
                <MobileContactInfo />
                <div className="mb-36"></div>
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

