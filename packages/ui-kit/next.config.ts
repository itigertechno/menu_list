import type { NextConfig } from 'next';
import type { Options } from 'sass-loader';

const nextConfig: NextConfig & { sassOptions: Options } = {
	sassOptions: {
		additionalData: "@use '@/app/color';"
	}
};

export default nextConfig;
