import s from './typography.module.scss';

type Typography = (props: Readonly<{ children: React.JSX.Element }>) => React.JSX.Element;

export const Heading1: Typography = p => <span className={s.heading1}>{p.children}</span>;
export const Heading2: Typography = p => <span className={s.heading2}>{p.children}</span>;
export const Heading3: Typography = p => <span className={s.heading3}>{p.children}</span>;
export const Heading4: Typography = p => <span className={s.heading4}>{p.children}</span>;
export const Heading5: Typography = p => <span className={s.heading5}>{p.children}</span>;
export const TextMain: Typography = p => <span className={s.textMain}>{p.children}</span>;
export const RegularNavigation: Typography = p => <span className={s.regularNavigation}>{p.children}</span>;
export const ActiveNavigation: Typography = p => <span className={s.activeNavigation}>{p.children}</span>;
export const TextButton: Typography = p => <span className={s.textButton}>{p.children}</span>;
export const TextOfElements: Typography = p => <span className={s.textOfElements}>{p.children}</span>;
export const CardContent: Typography = p => <span className={s.cardContent}>{p.children}</span>;
export const Subtitle: Typography = p => <span className={s.subtitle}>{p.children}</span>;
export const CardTitle: Typography = p => <span className={s.cardTitle}>{p.children}</span>;
export const Small: Typography = p => <span className={s.small}>{p.children}</span>;
