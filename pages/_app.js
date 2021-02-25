import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'


function MyApp({ Component, pageProps }) {
  console.log('render app');
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
