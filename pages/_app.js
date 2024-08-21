import Menu from "../components/Menu"
import Layout from "../components/Layout"
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout home >
      <Menu />
      <Component {...pageProps} />
      </Layout>
  </>
  )
}
