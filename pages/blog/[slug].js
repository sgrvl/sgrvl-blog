import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";

const md = new Remarkable("full", {
	html: true,
	typographer: true,
});

const Post = ({ data, contents }) => {
	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<div
				dangerouslySetInnerHTML={{ __html: contents }}
				style={{ maxWidth: "500px", margin: "0 auto" }}
			/>
		</>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync("posts");

	return {
		paths: files.map((filename) => ({
			params: {
				slug: filename.replace(".md", ""),
			},
		})),
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const markdown = fs.readFileSync(path.join("posts", slug + ".md")).toString();
	const parsedMD = matter(markdown);
	const htmlString = md.render(parsedMD.content);

	return {
		props: {
			slug,
			data: parsedMD.data,
			contents: htmlString,
		},
	};
};

export default Post;
