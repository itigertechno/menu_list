'use client';

import { Button } from '@/app/buttons';
import s from './button-demo.module.scss';
import { useEffect, useRef, useState } from 'react';

function alterHoverStyles({ classList: [clas] }: HTMLButtonElement) {
	for (const sheet of document.styleSheets)
		for (const rule of sheet.cssRules ?? sheet.rules ?? [])
			if (rule.selectorText?.includes(':hover') && rule.selectorText?.includes(clas)) {
				const upd = rule.selectorText
					.replace(/:(hover|active)/g, '')
					.split(',')
					.map(e => '.hover' + e)
					.join(',');
				sheet.insertRule(rule.cssText.replace(rule.selectorText, upd), sheet.cssRules.length);
			}
}

function getDuration({ classList: [clas] }: HTMLButtonElement) {
	let d;
	for (const sheet of document.styleSheets)
		for (const rule of sheet.cssRules ?? sheet.rules ?? []) {
			if (rule.selectorText?.includes(clas))
				for (const s of rule.style ?? []) if (s == 'transition-duration') d = rule.style[s];
		}
	return parseFloat(d) * 1000;
}

function useActionCycle<T extends HTMLElement>({
	ref,
	action,
	revert,
	holdDuration = 1500,
	intervalDuration = 1000
}: {
	ref: RefObject<T>;
	action: (element: T) => void;
	revert: (element: T) => void;
	holdDuration?: number;
	intervalDuration?: number;
}) {
	intervalDuration += holdDuration;
	useEffect(() => {
		if (!ref.current) return;

		let revertTimeout: NodeJS.Timeout;
		const executeAction = () => {
			action(ref.current!);
			revertTimeout = setTimeout(() => {
				revert(ref.current!);
			}, holdDuration);
		};

		executeAction();
		const intervalId = setInterval(executeAction, intervalDuration);

		return () => {
			clearInterval(intervalId);
			clearTimeout(revertTimeout);
		};
	}, [ref, action, revert, holdDuration, intervalDuration]);
}

export default function () {
	const ref = useRef<HTMLButtonElement>(null);
	const refd = useRef<HTMLButtonElement>(null);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		if (!ref.current) return;
		setDuration(getDuration(ref.current));
		alterHoverStyles(ref.current);
	}, [ref.current]);

	useActionCycle({
		ref,
		action: el => el.classList.add('hover'),
		revert: el => el.classList.remove('hover'),
		holdDuration: duration + 400,
		intervalDuration: duration + 1000
	});

	useActionCycle({
		ref: refd,
		action: el => (el.disabled = !el.disabled),
		revert: el => (el.disabled = !el.disabled)
	});

	return (
		<div className={s.main}>
			<span>active</span>
			<span>hover/pressed</span>
			<span>disabled</span>

			<Button onClick={() => {}}>Demo Button</Button>
			<Button ref={ref} onClick={() => {}}>
				Demo Button
			</Button>
			<Button ref={refd}>Demo Button</Button>

			<Button disabled>Demo Button</Button>
			<Button disabled>Demo Button</Button>
			<Button disabled>Demo Button</Button>
		</div>
	);
}
