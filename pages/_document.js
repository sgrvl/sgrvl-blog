import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import stylisRTLPlugin from "stylis-plugin-rtl";

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage((App) => (props) =>
			sheet.collectStyles(
				<StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
					<App {...props} />
				</StyleSheetManager>
			)
		);

		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags };
	}
	render() {
		return (
			<Html>
				<Head>
					{this.props.styleTags}
					<link
						href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Ubuntu&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
