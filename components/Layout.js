import React from "react";
import Head from "next/head";

const Layout = (props) => {
	return (
		<>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			{props.children}
		</>
	);
};

export default Layout;
