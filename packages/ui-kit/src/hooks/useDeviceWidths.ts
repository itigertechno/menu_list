'use client';

import { useEffect, useState } from 'react';

const screenWidths = {
	// https://en.wikipedia.org/wiki/Standard-definition_television
	// https://en.wikipedia.org/wiki/High-definition_video#Common_high-definition_video_modes
	sd: 480,
	hd: 720,
	fhd: 1080,
	qhd: 1440
} as const;

export function useDeviceWidths() {
	const screens = Object.entries(screenWidths).map(
		([name, px]) => [name as keyof typeof screenWidths, { px, state: useState(true) }] as const
	);
	useEffect(() => {
		if (typeof window == 'undefined') return;
		const handleResize = () => {
			for (const screen of screens) screen[1].state[1](window.innerWidth >= screen[1].px);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return Object.fromEntries(screens.map(([k, v]) => [k, v.state[0]]));
}
