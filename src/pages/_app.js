import 'normalize.css';
import '@/styles/common.scss'
import '@/styles/styles.scss'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isExcludedPage = router.pathname === '/';

  return <>
    <Header />
    <Component {...pageProps} />
    {!isExcludedPage && <Footer />}
  </>
}
