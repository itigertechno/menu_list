'use client';

import Image from 'next/image';
import { Button } from '@/app/buttons';
import { ActiveNavigation, RegularNavigation, Small, TextMain } from '@/app/typography';

import s from './footer.module.scss';
import logo from '@/../public/assets/svg/logo.svg';

export function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.footer_wrapper}>
				<div className={s.social}>
					<div>
						<Image className={s.logo} src={logo} alt="" />
						<Button onClick={() => {}}>Become partners</Button>
					</div>
					<div>
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
					</div>
				</div>
				<div className={s.hr}></div>
				<div className={s.legal}>
					<TextMain>© Menualista all rights reserved 2024</TextMain>
					<Small>
						<ul>
							<li>Privacy policy</li>
							<li>User agreement</li>
						</ul>
					</Small>
				</div>
			</div>
		</footer>
	);
}
