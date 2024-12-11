import localFont from 'next/font/local';

const gilroy = localFont({
	src: [
		{ weight: '100', style: 'normal', path: './fonts/Gilroy/Gilroy-Thin.woff' },
		{ weight: '100', style: 'italic', path: './fonts/Gilroy/Gilroy-ThinItalic.woff' },
		{ weight: '200', style: 'normal', path: './fonts/Gilroy/Gilroy-UltraLight.woff' },
		{ weight: '200', style: 'italic', path: './fonts/Gilroy/Gilroy-UltraLightItalic.woff' },
		{ weight: '300', style: 'normal', path: './fonts/Gilroy/Gilroy-Light.woff' },
		{ weight: '300', style: 'italic', path: './fonts/Gilroy/Gilroy-LightItalic.woff' },
		{ weight: '400', style: 'normal', path: './fonts/Gilroy/Gilroy-Regular.woff' },
		{ weight: '400', style: 'italic', path: './fonts/Gilroy/Gilroy-RegularItalic.woff' },
		{ weight: '500', style: 'normal', path: './fonts/Gilroy/Gilroy-Medium.woff' },
		{ weight: '500', style: 'italic', path: './fonts/Gilroy/Gilroy-MediumItalic.woff' },
		{ weight: '600', style: 'normal', path: './fonts/Gilroy/Gilroy-Semibold.woff' },
		{ weight: '600', style: 'italic', path: './fonts/Gilroy/Gilroy-SemiboldItalic.woff' },
		{ weight: '700', style: 'normal', path: './fonts/Gilroy/Gilroy-Bold.woff' },
		{ weight: '700', style: 'italic', path: './fonts/Gilroy/Gilroy-BoldItalic.woff' },
		{ weight: '800', style: 'normal', path: './fonts/Gilroy/Gilroy-Extrabold.woff' },
		{ weight: '800', style: 'italic', path: './fonts/Gilroy/Gilroy-ExtraboldItalic.woff' },
		{ weight: '900', style: 'normal', path: './fonts/Gilroy/Gilroy-Heavy.woff' },
		{ weight: '900', style: 'italic', path: './fonts/Gilroy/Gilroy-HeavyItalic.woff' },
		{ weight: '900', style: 'normal', path: './fonts/Gilroy/Gilroy-Black.woff' },
		{ weight: '900', style: 'italic', path: './fonts/Gilroy/Gilroy-BlackItalic.woff' }
	],
	display: 'swap',
	variable: '--font-gilroy'
});

// fonts/NunitoSans/ | grep 10pt | grep -Pv 'Expanded|Condensed'
const nunitoSans = localFont({
	src: [
		{ weight: '250', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-ExtraLight.ttf' },
		{ weight: '250', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-ExtraLightItalic.ttf' },
		{ weight: '300', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-Light.ttf' },
		{ weight: '300', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-LightItalic.ttf' },
		{ weight: '400', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-Regular.ttf' },
		{ weight: '400', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-Italic.ttf' },
		{ weight: '500', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-Medium.ttf' },
		{ weight: '500', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-MediumItalic.ttf' },
		{ weight: '600', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-SemiBold.ttf' },
		{ weight: '600', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-SemiBoldItalic.ttf' },
		{ weight: '700', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-Bold.ttf' },
		{ weight: '700', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-BoldItalic.ttf' },
		{ weight: '800', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-ExtraBold.ttf' },
		{ weight: '800', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-ExtraBoldItalic.ttf' },
		{ weight: '900', style: 'normal', path: './fonts/NunitoSans/NunitoSans_10pt-Black.ttf' },
		{ weight: '900', style: 'italic', path: './fonts/NunitoSans/NunitoSans_10pt-BlackItalic.ttf' }
	],
	display: 'swap',
	variable: '--font-nunito-sans'
});

export const style = [gilroy, nunitoSans].reduce((a, c, i) => a + (i == 0 ? '' : ' ') + c.variable, '');
