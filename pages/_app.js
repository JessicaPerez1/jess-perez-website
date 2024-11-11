"use client";

import PropTypes from "prop-types";
import Layout from "../components/Layout/layout";
import "../styles/global.css";

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.func.isRequired,
};

export default function App({ Component, pageProps }) {
  return (
    <Layout home>
      <Component {...pageProps} />
    </Layout>
  );
}
