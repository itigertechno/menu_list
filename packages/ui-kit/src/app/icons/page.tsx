import * as Components from './index';
import s from './icons-demo.module.scss';

export default function () {
	return (
		<main className={s.main}>
			{Object.entries(Components)
				.sort(([a1, a2], [b1, b2]) => a2().props.src.width - b2().props.src.width || a1.localeCompare(b1))
				.map(([name, Icon], i) => (
					<div key={i} className={s.wrapper}>
						<Icon />
						{`<${name} />`}
					</div>
				))}
		</main>
	);
}
