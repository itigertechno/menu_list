import Image from 'next/image';
import { CardContent, CardTitle, TextButton, TextOfElements } from '@/app/typography';
import { Bookmark, Plus, TimerPause } from '@/app/icons';

import dish from '@/../public/assets/image.jpg';
import s from './Card.module.scss';

export function Card({ title, price, mass, prepareTime }) {
	return (
		<div className={s.card}>
			<div className={s.card_image_wrapper}>
				<span className={s.bookmark_icon_wrapper}>
					<Bookmark />
				</span>
				<Image src={dish} alt="" />
				<div className={s.card_time}>
					<span className={s.timer_icon}>
						<TimerPause />
					</span>
					<CardContent>{prepareTime} min.</CardContent>
				</div>
			</div>
			<div className={s.card_main}>
				<div className={s.card_info_wrapper}>
					<CardTitle>{title}</CardTitle>
					<div className={s.card_details}>
						<TextOfElements>
							<span className={s.dollar_sign}>$</span> {price}
						</TextOfElements>
						<div className={s.card_mass}>
							<CardContent>{mass} g.</CardContent>
						</div>
					</div>
				</div>
				<button className={s.card_button}>
					<Plus />
					<TextButton>Choose</TextButton>
				</button>
			</div>
		</div>
	);
}
