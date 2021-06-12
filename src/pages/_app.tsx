// O componente _app.tsx fica disponível em todas as paginas. 
import '../styles/global.scss'
import { AppProps } from 'next/app' // importação realizada para corrigir a tipagem do Component
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      
    </>

  )
}

export default MyApp
