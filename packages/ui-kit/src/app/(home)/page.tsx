import Buttons from '@/app/buttons/page';
import Cards from '@/app/card/page';
import Fonts from '@/app/fonts/page';
import Icons from '@/app/icons/page';
import { Footer } from '@/app/footer';
import Typograpgy from '@/app/typography/page';

export default function Home() {
	return (
		<>
			<Buttons />

			<Cards />

			<Fonts />

			<Footer />

			<Icons />

			<Typograpgy />
		</>
	);
}
