'use client';

import Image from 'next/image';
import { CardContent, CardTitle, Heading5, Subtitle, TextButton, TextMain, TextOfElements } from '@/app/typography';
import { Aspect, Bookmark, Calendar, Clock, IconStar, Location, Plus, TimerPause } from '@/app/icons';
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
					<div className={s.preview_image}>
						<span
							className={cn(
								s.image_skeleton_loader,
								imageScrim && s.loader_scrim,
								imageLoaderAnimate && s.animate
							)}
							style={{ borderRadius }}
						/>
					</div>
				)}
				{imageUrl && imageScrim && <span className={s.scrim} style={{ borderRadius }} />}
				{topLeft && <div className={s.top_left}>{topLeft}</div>}
				{topRight && <div className={s.top_right}>{topRight}</div>}
				{bottomLeft && <div className={s.bottom_left}>{bottomLeft}</div>}
				{bottomRight && <div className={s.bottom_right}>{bottomRight}</div>}
			</div>
			<div className={s.card_content}>
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

// topLeft

function BadgeType({ text }: { text: string }) {
	return (
		<div className={s.badge}>
			<CardContent>{text}</CardContent>
		</div>
	);
}

// topRight

function ButtonBookmark() {
	return (
		<span className={s.bookmark_icon_wrapper}>
			<Bookmark />
		</span>
	);
}

// bottomLeft

function PreviewCaption({ subtitle, caption }) {
	return (
		<div className={s.image_caption}>
			<Subtitle>{subtitle}</Subtitle>
			<Heading5>{caption}</Heading5>
		</div>
	);
}

function LabelTimeReading({ readingTimeMinutes, onBackground = false }) {
	return (
		<div className={cn(s.label_reading_time, onBackground && s.on_background)}>
			<Clock />
			<TextMain>{readingTimeMinutes} minutes of reading</TextMain>
		</div>
	);
}

// bottomRight

function BadgeTimePrepare({ prepareTime }) {
	return (
		<div className={s.card_time}>
			<TimerPause />
			<CardContent>{prepareTime} min.</CardContent>
		</div>
	);
}

function ButtonPreview() {
	return (
		<div className={s.button_preview}>
			<Aspect />
		</div>
	);
}

// labels

function LabelEventRange({ range, limited = false }) {
	return (
		<div className={s.label_event_range}>
			{limited ? <TimerPause /> : <Clock />}
			<div className={s.valid_until_date}>
				{limited && <TextMain>Valid until:</TextMain>}
				<span className={cn(limited && s.text_filters)}>
					{/* todo: accept args aka start/end */}
					<TextMain>{range}</TextMain>
				</span>
			</div>
		</div>
	);
}

// todo: replace address with coordinates???
function LabelLocation({ address }) {
	return (
		<div className={s.label_location}>
			<Location />
			<TextMain>{address}</TextMain>
		</div>
	);
}

function LabelRatingReviews({ ratingValue, reviewCount }) {
	return (
		<div className={s.label_rating}>
			<IconStar />
			<div>
				<span className={s.rating}>
					<TextMain>{ratingValue.toFixed(1)}</TextMain>
				</span>
				<span className={s.reviews}>
					<TextMain>
						({reviewCount > 10 ? ~~(reviewCount / 10) * 10 : reviewCount}
						{reviewCount > 10 && '+'})
					</TextMain>
				</span>
			</div>
		</div>
	);
}

// todo: move to @/lib/util
const dateFormatter = Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric',
	year: 'numeric'
});
const getOrdinalSuffix = (n: number) => ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th';
export const dateFormat = (date: Date) => dateFormatter.format(date).replace(/\d+/, m => `${m}${getOrdinalSuffix(+m)}`);

const dateTimeFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: '2-digit',
	hour12: true
});
export const dateTimeFormat = (date: Date) => dateTimeFormatter.format(date);

function LabelDate({ dateTime = false, date = new Date() }) {
	return (
		<div className={s.label_date}>
			<Calendar />
			<TextMain>{(dateTime ? dateTimeFormat : dateFormat)(date)}</TextMain>
		</div>
	);
}

// variants

export function CardSale({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			imageScrim
			topLeft={<BadgeType text="Stocks" />}
			bottomLeft={<PreviewCaption caption="The Italian House" subtitle="Restaurant" />}
			content={
				<div className={s.card_content_sale}>
					<LabelEventRange limited range="8 a.m.—10 a.m., Every Tuesday" />
					<LabelLocation address="Area 12 Ottobre 1492, 12, Rome" />
				</div>
			}
		/>
	);
}

export function CardCompany({ ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			topLeft={<BadgeType text="Restaurant" />}
			topRight={<ButtonBookmark />}
			bottomRight={<ButtonPreview />}
			content={
				<div className={s.card_content_company}>
					<div className={s.labels_wrapper}>
						<LabelLocation address="Area 12 Ottobre 1492, 12, Rome" />
						<LabelEventRange range="8 a.m.—10 p.m." />
					</div>
					<LabelRatingReviews ratingValue={4.5} reviewCount={34} />
				</div>
			}
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
			topLeft={<BadgeType text="Events" />}
			topRight={<ButtonBookmark />}
			bottomLeft={<PreviewCaption caption="The Italian House" subtitle="Restaurant" />}
			content={
				<div className={s.card_content_event}>
					<LabelDate dateTime date={new Date(2024, 11, 24)} />
					<LabelLocation address="Area 12 Ottobre 1492, 12, Rome" />
				</div>
			}
		/>
	);
}

export function CardServiceArticle({ readingTimeMinutes, ...p }) {
	return (
		<CardAbstraction
			{...p}
			wide
			roundedBothSides
			imageScrim
			topLeft={<BadgeType text="Article" />}
			topRight={<ButtonBookmark />}
			bottomLeft={<LabelTimeReading onBackground readingTimeMinutes={readingTimeMinutes} />}
			content={
				<div className={s.card_content_article}>
					<TextMain>
						There is something for everyone in this city, regardless of whether you are interested in
						ancient history, art, fashion or just want to plunge into the atmosphere of a bustling Italian
						city.
					</TextMain>
				</div>
			}
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
			topLeft={<BadgeType text="News" />}
			topRight={<ButtonBookmark />}
			bottomLeft={<PreviewCaption caption="The Italian House" subtitle="Restaurant" />}
			content={
				<div className={s.card_content_news}>
					<LabelDate date={new Date(2024, 8, 11)} />
					<LabelTimeReading readingTimeMinutes={15} />
				</div>
			}
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
			topRight={<ButtonBookmark />}
			bottomRight={<BadgeTimePrepare prepareTime={prepareTime} />}
			content={
				<div className={s.card_content_product}>
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
			<div className={s.card_content}>
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
