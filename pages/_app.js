

// 'pages/_app.js' 에만 global CSS file 임포트가 가능

import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}