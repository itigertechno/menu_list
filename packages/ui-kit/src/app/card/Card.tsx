'use client';

import Image from 'next/image';
import { CardContent, CardTitle, Heading5, TextButton, TextOfElements } from '@/app/typography';
import { Bookmark, Plus, TimerPause } from '@/app/icons';
import { useDeviceWidths } from '@/hooks/useDeviceWidths';
import { cn } from '@/util/joinClassNames';

import s from './Card.module.scss';

function CardAbstraction({
	imageUrl,
	imageScrim = false,
	imageLoaderAnimate = true,
	wide = false,
	compact = false,
	title,
	content = null,
	roundedValue = 16,
	roundedBothSides = false,
	topLeft = null,
	topRight = null,
	bottomLeft = null,
	bottomRight = null
}: {
	title: string;
}) {
	// this could be done using css, but managing condintions there would be worse idea then allowing passing arbitrary radius value for future here.
	const borderRadiusBoth = `${roundedValue}px`;
	const borderRadius = roundedBothSides ? borderRadiusBoth : `${roundedValue}px ${roundedValue}px 0 0`;
	return (
		<div className={cn(s.card, wide && s.card_wide)} style={{ borderRadius: borderRadiusBoth }}>
			<div className={s.card_image_wrapper}>
				{imageUrl ? (
					<Image
						className={s.preview_image}
						style={{ borderRadius }}
						src={imageUrl}
						alt=""
						width={wide ? 636 : 306}
						height={wide ? 298 : 180}
					/>
				) : (
					<div className={s.preview_image} style={{ borderRadius }}>
						<span
							className={cn(
								s.image_skeleton_loader,
								imageScrim && s.loader_scrim,
								imageLoaderAnimate && s.animate
							)}
						></span>
					</div>
				)}
				{imageUrl && imageScrim && <span className={s.scrim} style={{ borderRadius }} />}
				{topLeft && <div className={s.top_left}>{topLeft}</div>}
				{topRight && <div className={s.top_right}>{topRight}</div>}
				{bottomLeft && <div className={s.bottom_left}>{bottomLeft}</div>}
				{bottomRight && <div className={s.bottom_right}>{bottomRight}</div>}
			</div>
			<div className={s.card_main}>
				{wide ? (
					//
					<Heading5>{title}</Heading5>
				) : (
					<CardTitle>{title}</CardTitle>
				)}
				{content}
			</div>
		</div>
	);
}

function Badge({ text }: { text: string }) {
	return (
		<div className={s.badge}>
			<CardContent>{text}</CardContent>
		</div>
	);
}

function ButtonBookmark() {
	return (
		<span className={s.bookmark_icon_wrapper}>
			<Bookmark />
		</span>
	);
}

export function CardSale({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			imageScrim
			topLeft={<Badge text="Stocks" />}
			//
		/>
	);
}

export function CardCompany({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			topLeft={<Badge text="Restaurant" />}
			topRight={<ButtonBookmark />}
			//
		/>
	);
}

export function CardCompanyEvent({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			imageScrim
			topLeft={<Badge text="Events" />}
			topRight={<ButtonBookmark />}
			//
		/>
	);
}

export function CardServiceArticle({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			topLeft={<Badge text="Article" />}
			topRight={<ButtonBookmark />}
			//
		/>
	);
}

export function CardCompanyNews({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			imageScrim
			topLeft={<Badge text="News" />}
			topRight={<ButtonBookmark />}
			//
		/>
	);
}

export function Card({
	price,
	mass,
	prepareTime,

	...p
}) {
	const { hd } = useDeviceWidths();

	return (
		<CardAbstraction
			{...p}
			topRight={
				<span className={s.bookmark_icon_wrapper}>
					<Bookmark />
				</span>
			}
			bottomRight={
				<div className={s.card_time}>
					<span className={s.timer_icon}>
						<TimerPause />
					</span>
					<CardContent>{prepareTime} min.</CardContent>
				</div>
			}
			content={
				<div className={s.card_info_wrapper}>
					<div className={s.card_details}>
						<TextOfElements>
							<span className={s.dollar_sign}>$</span> {price}
						</TextOfElements>
						<div className={s.card_mass}>
							<CardContent>{mass} g.</CardContent>
						</div>
					</div>
					<button className={s.card_button}>
						<Plus />
						<TextButton>Choose</TextButton>
					</button>
				</div>
			}
		/>
	);
}

function CardAbstraction__Backup({ imageUrl = null, title, price, mass, prepareTime, compact }) {
	return (
		<div className={s.card}>
			<div className={s.card_image_wrapper}>
				<span className={s.bookmark_icon_wrapper}>
					<Bookmark />
				</span>

				{/* todo: remove next/image. for arbitrary image link value */}
				{imageUrl ? <Image src={imageUrl} alt="" width={306} height={180} /> : <img />}
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
