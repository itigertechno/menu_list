import { TextButton } from '../typography';
import s from './buttons.module.scss';

export const Button = ({
	children,
	onClick
}: {
	children: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
	<button className={s.button} onClick={onClick}>
		<TextButton>{children}</TextButton>
	</button>
);
