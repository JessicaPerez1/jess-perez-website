import Layout from "../components/Layout"
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
      <Layout home >
      <Component {...pageProps} />
      </Layout>
  )
}
