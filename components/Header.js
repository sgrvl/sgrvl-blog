import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
	width: 100%;
	height: 10vh;
	margin-bottom: -10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: static;
	top: 1em;
	padding: 0 4em;

	ul {
		display: flex;
		justify-content: flex-end;
		list-style: none;
		padding: 0;
		margin: 0;
		color: ${(props) => props.theme.pink};
	}

	li {
		margin-left: 2em;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		height: 55px;
		width: auto;
	}
`;

const Header = () => {
	return (
		<header>
			<Nav>
				<Link href="/">
					<a>
						<img src="/SG-logo.svg" alt="my logo" />
					</a>
				</Link>
				<ul>
					<li>
						<Link href="/blog/">
							<a>blog</a>
						</Link>
					</li>
					<li>
						<Link href="/blog/">
							<a>about</a>
						</Link>
					</li>
				</ul>
			</Nav>
		</header>
	);
};

export default Header;
