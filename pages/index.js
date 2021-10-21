import Head from 'next/head'
import { useRouter } from 'next/router'
import en from '../locales/en'
import kr from '../locales/kr'

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : kr

  const handleClick = (e) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  };

  return (
    <div>
      <Head>
        <title>{ t.title }</title>
      </Head>
      <header>
        <button className = "en-button" onClick = { handleClick } value = "en">en</button>
        <button className = "kr-button" onClick = { handleClick } value = "kr">kr</button>
      </header>
      <main>
          <p>{ t.main_p }</p>
      </main>
      <footer>
          <p>{ t.footer_p }</p>
      </footer>
      <style jsx>{`
        button {
          border: none;
          background-color: transparent;
        }
        .${locale}-button {
          border: 1px solid black;
          border-radius: 50%;
          background-color: grey;
        }
      `}</style>
    </div>
  )
}
