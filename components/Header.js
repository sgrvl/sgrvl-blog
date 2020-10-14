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
		font-size: 0.75rem;
	}

	li {
		position: relative;
		margin-left: 2em;

		&::before {
			content: "";
			position: absolute;
			height: 1.5px;
			width: 0;
			background: white;
			bottom: -3px;
			background: ${(props) => props.theme.cyan};
			transition: width 0.2s ease-out;
		}

		&:hover::before {
			width: 100%;
		}
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.pink};
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
							<a>projects</a>
						</Link>
					</li>
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
