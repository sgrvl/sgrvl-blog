import React from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import styled from "styled-components";

const Wrap = styled.ul`
	max-width: 600px;
	margin: 0 auto;

	li {
		margin-bottom: 0.5rem;
	}

	a {
		color: ${(props) => props.theme.secondary};
		text-decoration: none;
		font-size: 18px;
	}
`;

const Blog = ({ slugs }) => {
	return (
		<>
			<Head>
				<title>s.grvl | blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrap>
				{slugs.map((slug) => {
					return (
						<li key={slug}>
							<Link href="/blog/[slug]" as={`/blog/${slug}`}>
								<a>
									{slug
										.replace(/-/g, " ")
										.replace(slug[0], slug[0].toUpperCase())}
								</a>
							</Link>
						</li>
					);
				})}
			</Wrap>
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
