import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	ul {
		display: flex;
		justify-content: flex-end;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		margin: 1em;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

const Header = () => {
	return (
		<header>
			<Nav>
				<Link href="/">
					<a>
						<h1>sgrvl</h1>
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
