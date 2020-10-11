import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on("init", (user) => {
				if (!user) {
					window.netlifyIdentity.on("login", () => {
						document.location.href = "/admin/";
					});
				}
			});
		}
	}, []);

	return (
		<Layout>
			<Head>
				<title>simon.gravel</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</Layout>
	);
}
