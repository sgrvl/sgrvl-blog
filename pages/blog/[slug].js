import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Remarkable } from "remarkable";
import styled from "styled-components";

const md = new Remarkable("full", {
	html: true,
	typographer: true,
});

const Article = styled.div`
	max-width: 600px;
	margin: 15vh auto 5vh auto;
	font-family: "Ubuntu", sans-serif;
	background: rgba(56, 58, 89, 0.3);
	box-sizing: content-box;
	padding: 5em;

	.img-wrap {
		width: 100%;
		position: relative;

		& > * {
			width: 100%;
		}
	}
`;

const Post = ({ data, contents }) => {
	return (
		<>
			<Head>
				<title>s.grvl | {data.title}</title>
			</Head>
			<Article>
				<div dangerouslySetInnerHTML={{ __html: contents }} />
			</Article>
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
