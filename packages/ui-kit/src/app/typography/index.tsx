import s from './typography.module.scss';

type TextElem = Readonly<{ children: React.JSX.Element }>;

export const Heading1 = ({ children }: TextElem) => <span className={s.heading1}>{children}</span>;

export const Heading2 = ({ children }: TextElem) => <span className={s.heading2}>{children}</span>;

export const Heading3 = ({ children }: TextElem) => <span className={s.heading3}>{children}</span>;

export const Heading4 = ({ children }: TextElem) => <span className={s.heading4}>{children}</span>;

export const Heading5 = ({ children }: TextElem) => <span className={s.heading5}>{children}</span>;

export const TextMain = ({ children }: TextElem) => <span className={s.textMain}>{children}</span>;

export const RegularNavigation = ({ children }: TextElem) => <span className={s.regularNavigation}>{children}</span>;

export const ActiveNavigation = ({ children }: TextElem) => <span className={s.activeNavigation}>{children}</span>;

export const TextButton = ({ children }: TextElem) => <span className={s.textButton}>{children}</span>;

export const TextOfElements = ({ children }: TextElem) => <span className={s.textOfElements}>{children}</span>;

export const CardContent = ({ children }: TextElem) => <span className={s.cardContent}>{children}</span>;

export const Subtitle = ({ children }: TextElem) => <span className={s.subtitle}>{children}</span>;

export const CardTitle = ({ children }: TextElem) => <span className={s.cardTitle}>{children}</span>;

export const Small = ({ children }: TextElem) => <span className={s.small}>{children}</span>;
