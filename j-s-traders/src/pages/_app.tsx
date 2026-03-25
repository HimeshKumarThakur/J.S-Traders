import type { AppProps } from 'next/app';
import '../app/globals.css';
import '../styles/variables.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
