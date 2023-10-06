import "@/styles/globals.css";
import { Darker_Grotesque } from "@next/font/google";

const DarkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "500"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${DarkerGrotesque.className} min-h-screen bg-custom-cream`}
    >
      <Component {...pageProps} />;
    </main>
  );
}
