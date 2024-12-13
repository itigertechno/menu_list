import { Card } from './Card';
import s from './card-demo.module.scss';

export default function () {
	return (
		<main className={s.main}>
			<Card
				title="Scrambled eggs with bacon, avocado, cherry tomatoes"
				price={50.99}
				mass={380}
				prepareTime={17}
			/>
		</main>
	);
}
