import reset from './reset';
import font from './font';
import breakpoint from './breakpoint';
import color from './color';
import { spacing } from './variables';

const globalStyles = `
	@import url('https://fonts.googleapis.com/css?family=Karla:400,700');

	${reset}

	body {
		color: ${color.black};
		font-family: ${font.family};
		font-weight: ${font.bold};
		font-size: 18px;
		padding: ${spacing.medium};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;

		${breakpoint('small', `
			font-size: 20px;
		`)}
	}

	::selection {
		background: ${color.red};
		color: ${color.white};
	}

	::-moz-selection {
		background: ${color.red};
		color: ${color.white};
	}

	a {
		text-decoration: none;
	}
`;

export default globalStyles;