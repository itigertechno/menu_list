export function cn(...classNames: (string | false)[]) {
	return classNames.filter(e => e !== false).join(' ');
}
