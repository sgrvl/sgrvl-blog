import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";

const Blog = ({ slugs }) => {
	return (
		<>
			<Head>
				<title>s.grvl | blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{slugs.map((slug) => {
				return (
					<div key={slug}>
						<Link href="/blog/[slug]" as={`/blog/${slug}`}>
							<a>{slug}</a>
						</Link>
					</div>
				);
			})}
		</>
	);
};

export default Blog;

export const getStaticProps = async () => {
	const files = fs.readdirSync("posts");

	return {
		props: {
			slugs: files.map((filename) => filename.replace(".md", "")),
		},
	};
};
