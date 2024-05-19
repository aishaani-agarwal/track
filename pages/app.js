// pages/_app.js
import "@/styles/globals.css";
// pages/_app.js

import '../styles/globals.css' // Import global styles
import 'tailwindcss/tailwind.css' // Import Tailwind CSS


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// pages/_app.js