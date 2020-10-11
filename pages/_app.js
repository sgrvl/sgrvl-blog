// import App from 'next/app'
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import "../Normalize.css";

const GlobalStyle = createGlobalStyle`
`;

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
