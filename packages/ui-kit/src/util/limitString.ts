// todo: there have to be important optimizations. 1. string have to be truncated by it's actual pixel width (string width), or how many rows(not splittet by new line special character but rather may be(not necessery, but mostly this case is not about \n's) continues line (see: word-break css rule)) it takes inside container. 2. usage Intl.Segmenter to avoid something like https://ilyabirman.ru/meanwhile/pictures/liz-truss-anal@2x.jpg. But it's fine in most cases. Assuming in our app texts filled by end-users(managers), in their interest insert not viually breaking text.
export function limit(s: string, length: number) {
	return s.length > length ? s.slice(0, length) + '...' : s;
}
