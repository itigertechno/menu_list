import type { NextConfig } from 'next';
import type { Options } from 'sass-loader';

const nextConfig: NextConfig & { sassOptions: Options } = {
	sassOptions: {
		additionalData: "@use '@/app/color';"
	},
	typescript: {
		// Allow production builds to successfully complete even if project has type errors.
		ignoreBuildErrors: true
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
