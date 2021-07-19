// O componente _app.tsx fica disponível em todas as paginas. 
import '../styles/global.scss'
import { AppProps } from 'next/app' // importação realizada para corrigir a tipagem do Component
import { Header } from '../components/Header'
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />
      
    </NextAuthProvider>

  )
}

export default MyApp
