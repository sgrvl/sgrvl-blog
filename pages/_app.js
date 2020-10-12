// import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../components/Header";
import "../Normalize.css";

const GlobalStyle = createGlobalStyle`
	body {
		background: ${(props) => props.theme.body};
		color: ${(props) => props.theme.text};
	}
`;

const theme = {
	body: "#222831",
	text: "#ececec",
	secondary: "#f2a365",
	highlight: "#30475e",
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
