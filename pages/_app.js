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
	body: "#282a36",
	text: "#f8f8f2",
	cyan: "#8be9fd",
	green: "#50fa7b",
	pink: "#ff79c6",
	purple: "#bd93f9",
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
