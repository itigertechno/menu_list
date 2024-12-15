import {
	Card,
	CardCompany,
	CardCompanyEvent,
	CardCompanyNews,
	CardSale,
	CardServiceArticle,
	CollectionCardCompany,
	CollectionCardCompanyEvent,
	CollectionCardCompanyNews,
	CollectionCardSale,
	CollectionCardServiceArticle
} from './Card';
import s from './card-demo.module.scss';

export default function () {
	return (
		<main className={s.main}>
			<CardSale
				imageUrl="https://i.imgur.com/UksPOLV.jpeg"
				title="Two dishes for the price of one 1 + 1. And too long title actualy"
			/>
			<CardCompany imageUrl="https://i.imgur.com/9liApQj.jpeg" title="The Italian House" />
			<CardCompanyEvent imageUrl="https://i.imgur.com/ug5BVVt.jpeg" title="Pizza cooking Master class" />
			<CardServiceArticle
				imageUrl="https://i.imgur.com/bct6UPT.jpeg"
				title="Top 5 most popular places in Rome"
				readingTimeMinutes={15}
			/>
			<CardCompanyNews
				imageUrl="https://i.imgur.com/wyu0mNS.jpeg"
				// todo: trunc with dots (foo ba...)
				title="Based on the rich experience of Italian specialists, the restaurant revives the art of winemaking in an area with unique climatic conditions,"
			/>

			{/*  */}

			<CollectionCardSale
				imageUrl="https://i.imgur.com/x4tELcS.jpeg"
				title="Two dishes for the price of one 1 + 1. And too long title actualy"
			/>
			<CollectionCardCompany imageUrl="https://i.imgur.com/9liApQj.jpeg" title="The Italian House" />
			<CollectionCardCompanyEvent
				imageUrl="https://i.imgur.com/ug5BVVt.jpeg"
				title="Pizza cooking Master class"
			/>
			<CollectionCardServiceArticle
				imageUrl="https://i.imgur.com/bct6UPT.jpeg"
				title="Top 5 most popular places in Rome"
				readingTimeMinutes={15}
			/>
			<CollectionCardCompanyNews
				imageUrl="https://i.imgur.com/wyu0mNS.jpeg"
				// todo: trunc with dots (foo ba...)
				title="Based on the rich experience of Italian specialists, the restaurant revives the art of winemaking in an area with unique climatic conditions,"
			/>

			{/*  */}

			<Card
				imageUrl="https://momentsoflove.in/wp-content/uploads/2021/11/old-wooden-frames_pngimagesfree_pngimagesfree.png"
				title="Scrambled eggs with bacon, avocado, cherry tomatoes"
				price={50.99}
				mass={380}
				prepareTime={17}
			/>
			<Card
				imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEOuqocsHSTO9xHlle6LR-O9ONY2ejXzRWw&s"
				title="Scrambled eggs with bacon, avocado, cherry tomatoes"
				price={50.99}
				mass={380}
				prepareTime={17}
			/>
			<Card
				imageUrl="https://i.imgur.com/COZo2Av.jpeg"
				title="Scrambled eggs with bacon, avocado, cherry tomatoes yes yes yes yes yes yes yes yes yes"
				price={50.99}
				mass={380}
				prepareTime={17}
			/>
			<div />
			<div />

			<CardSale
				//
				imageUrl=""
				title="Two dishes for the price of one 1 + 1"
			/>
			<Card
				imageUrl=""
				title="Scrambled eggs with bacon, avocado, cherry tomatoes"
				price={50.99}
				mass={380}
				prepareTime={17}
			/>
		</main>
	);
}
