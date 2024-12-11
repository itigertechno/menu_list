'use client';

import { useEffect, useRef, useState } from 'react';
import * as Components from './index';
import s from './typo-demo.module.scss';

const getLineHeightPercentage = (div: React.RefObject<null>['current']) => {
	if (!div) return 'normal';
	for (const sheet of document.styleSheets)
		for (const rule of sheet.cssRules ?? [])
			if (div.parentElement?.classList[0] && rule.selectorText?.slice(1) === div.parentElement.classList[0])
				return /\d+%/.exec(rule.style.font)[0];
	return 'normal';
};

export default function () {
	const [_, forceRerender] = useState(false);
	const [components, setComponents] = useState(
		Object.entries(Components).map(([name, Component]) =>
			//
			({ ref: useRef(null), name, Component })
		)
	);
	useEffect(() => {
		setComponents(components =>
			components.toSorted(
				(a, b) =>
					parseInt(getComputedStyle(b.ref.current!).fontSize) -
					parseInt(getComputedStyle(a.ref.current!).fontSize)
			)
		);
		const handleResize = () => forceRerender(p => !p); // trigger to update getComputedStyle
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div className={s.demo}>
			<div className={s.wrapper_header}>
				<div>Styles</div>
				<div className={s.pangram}>Example</div>
				<div>Properties</div>
			</div>
			{components.map(({ Component, name, ref }, i) => (
				<div key={i}>
					<Component>
						<div ref={ref}>{name}</div>
					</Component>
					<Component>
						<div className={s.pangram}>
							Gentlemen, the current development methodology directly depends on favorable prospects.
						</div>
					</Component>
					<div className={s.property_values}>
						<div>
							font-family:{' '}
							{ref.current
								? getComputedStyle(ref.current).fontFamily.replace(
										/\W+(\w+).+/,
										(_, m) => m[0].toUpperCase() + m.slice(1)
								  )
								: 0}
						</div>
						<div>font-size: {ref.current ? getComputedStyle(ref.current).fontSize : 0}</div>
						<div>font-weight: {ref.current ? getComputedStyle(ref.current).fontWeight : 0}</div>
						<div>line-height: {getLineHeightPercentage(ref.current)}</div>
					</div>
				</div>
			))}
		</div>
	);
}
