// pages/_app.js
import '../styles/styles.css'; // Import global CSS file here

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
