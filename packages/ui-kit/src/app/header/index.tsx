'use client';

import Image from 'next/image';
import { Button } from '@/app/buttons';
import { ActiveNavigation, CardContent, RegularNavigation, Small, TextMain } from '@/app/typography';

import s from './header.module.scss';
import logo from '@/../public/assets/svg/logo 2.svg';
import { Cart, Navigation, SearchNormal, TextalignJustifycenter } from '../icons';

export function Header() {
	return (
		<footer className={s.footer}>
			<div className={s.footer_wrapper}>
				<div className={s.social}>
					<div>
						<div className={s.search_wrap}>
							<div className={s.logo_wrap}>
								<Image className={s.logo} src={logo} alt="" />
								<span className={s.loc}>
									<Navigation></Navigation>
									<ActiveNavigation>Italy, Tuscany</ActiveNavigation>
								</span>
							</div>
							<div className={s.search}>
								<span className={s.placeholder}>
									<CardContent>What interests you?</CardContent>
								</span>
								<span className={s.s_icon}>
									<SearchNormal></SearchNormal>
								</span>
							</div>
						</div>
						<div className={s.ico_wrap}>
							<Cart></Cart>
							<TextalignJustifycenter></TextalignJustifycenter>
						</div>
						{/* <Button onClick={() => {}}>Become partners</Button> */}
					</div>
					{/* <div>
						<div className={s.contacts}>
							<div>
								<Small>Telephone:</Small>
								<ActiveNavigation>+39 0690279201</ActiveNavigation>
							</div>
							<div>
								<Small>Email:</Small>
								<ActiveNavigation>info@menualista.com</ActiveNavigation>
							</div>
						</div>
						<RegularNavigation>
							<ul className={s.site_map}>
								<li>Catalog</li>
								<li>Favourites</li>
								<li>Orders</li>
								<li>Profile</li>
							</ul>
						</RegularNavigation>
					</div> */}
				</div>
			</div>
		</footer>
	);
}
