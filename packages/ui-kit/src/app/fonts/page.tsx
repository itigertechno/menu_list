'use client';

import { useEffect, useState } from 'react';
import s from './fonts.module.scss';

export default function () {
	const [fonts, setFonts] = useState<string[][]>([]);
	useEffect(() => {
		const style = getComputedStyle(document.body);
		const fontsSet = new Set();
		const fonts = [];
		for (const sheet of document.styleSheets)
			for (const rule of sheet.cssRules ?? [])
				for (const property of (rule as any).style ?? [])
					if (property.startsWith('--font') && !fontsSet.has(property)) {
						fontsSet.add(property);
						fonts.push([
							`var(${property})`,
							style
								.getPropertyValue(property)
								.replace(/\W+(\w+).+/, (_, m) => m[0].toUpperCase() + m.slice(1))
						]);
					}
		setFonts(fonts.sort(([, a], [, b]) => a.localeCompare(b)));
	}, []);

	return (
		<main className={s.main_class}>
			{fonts.map(([fontFamily, fontName], i) => (
				<div key={i} className={s.demo_wrapper} style={{ fontFamily }}>
					<div className={s.name_wrapper}>
						<div className={s.font_name}>{fontName}</div>
						<span className={s.notice}>heading</span>
					</div>
					<div className={s.demo}>
						<div>A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z</div>
						<div>1 2 3 4 5 6 7 8 9 0 / * - +</div>
					</div>
				</div>
			))}
		</main>
	);
}
