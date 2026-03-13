import About from "./about/page";
// import { siteTitle } from "../components/Layout/layout";

export const metadata = {
  title: "Jessica Perez Portfolio",
  description: "Jessica Perez website",
  icons: [{ rel: "icon", url: "/tv-glitch.png" }],
  openGraph: {
    images: ["/tv-glitch.png"],
    title: "Jessica Perez Website",
  },
};

export default function Home() {
  return <About />;
}

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title> Jessica Perez Portfolio</title>
//         <link rel="icon" href="/tv-glitch.png" />
//         <meta name="description" content="Jessica Perez website" />
//         {/* <meta property="og:image" content="/tv-glitch.png" /> */}
//         <meta
//           property="og:image"
//           content={`https://og-image.vercel.app/
//         ${`tv-glitch.png`}?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
//         />
//         <meta name="og:title" content={siteTitle} />
//         <meta name="og:title" content={siteTitle} />
//         <meta property="og:image" content="/tv-glitch.png" />
//         <meta name="og:title" content={siteTitle} />
//         <meta property="og:image" content="/tv-glitch.png" />
//       </Head>
//       <About />
//     </>
//   );
// }