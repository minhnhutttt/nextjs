import 'normalize.css';
import '@/styles/common.scss'
import '@/styles/styles.scss'
import Header from '@/components/header/header'


export default function App({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}
