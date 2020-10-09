import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

const Post = ({ contents, data }) => {
	console.log(contents);
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
	const htmlString = marked(parsedMD.content);

	return {
		props: {
			slug,
			contents: htmlString,
			data: parsedMD.data,
		},
	};
};

export default Post;
