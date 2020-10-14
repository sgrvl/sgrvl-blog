import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
	height: 100vh;
	overflow: hidden;
`;

const Title = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 65%;
	}
`;

const Social = styled.div``;

const BottomBar = styled.div`
	position: absolute;
	bottom: 0;
	height: 10px;
	width: 100%;
	background: ${(props) =>
		`linear-gradient(90deg, ${props.theme.cyan} 0%, ${props.theme.cyan} 20%, ${props.theme.purple} 20%, ${props.theme.purple} 40%, ${props.theme.green} 40%, ${props.theme.green} 60%, ${props.theme.pink} 60%, ${props.theme.pink} 80%, ${props.theme.text} 80%)`};
`;

const Home = () => {
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
				<title>Simon Gravel</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrap>
				<Title>
					<img src="/simongravel.svg" alt="Simon Gravel" />
				</Title>
			</Wrap>
			<BottomBar />
		</Layout>
	);
};

export default Home;
