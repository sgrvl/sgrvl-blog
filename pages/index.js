import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import Layout from "../components/Layout";
import { useEffect } from "react";

export default function Home({ slugs }) {
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
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Hello world</h1>
			{slugs.map((slug) => {
				return (
					<div key={slug}>
						<Link href="/blog/[slug]" as={`/blog/${slug}`}>
							<a>{`/blog/${slug}`}</a>
						</Link>
					</div>
				);
			})}
		</Layout>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync("posts");

	return {
		props: {
			slugs: files.map((filename) => filename.replace(".md", "")), //.replace('-',' ') for later *mental note
		},
	};
};
