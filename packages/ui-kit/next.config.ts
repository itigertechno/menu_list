import type { NextConfig } from 'next';
import type { Options } from 'sass-loader';

const nextConfig: NextConfig & { sassOptions: Options } = {
	sassOptions: {
		additionalData: "@use '@/app/color';"
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgur.com',
				port: '',
				pathname: '/*.jpeg'
			}
		]
	}
};

export default nextConfig;
