import About from "../../components/About";

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
