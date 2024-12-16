import { TextButton } from '../typography';
import s from './buttons.module.scss';

export const Button = ({
	children,
	onClick,
	...p
}: {
	children: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
	<button className={s.button} onClick={onClick} {...p}>
		<TextButton>{children}</TextButton>
	</button>
);

export const ButtonAccent = ({
	children,
	onClick,
	...p
}: {
	children: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
	<button className={s.button_accent} onClick={onClick} {...p}>
		<TextButton>{children}</TextButton>
	</button>
);
