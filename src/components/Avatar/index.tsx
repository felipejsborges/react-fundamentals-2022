import styles from './styles.module.css';

interface AvatarProps {
	src: string;
}

export function Avatar({ src }: AvatarProps) {
	return (
		<img className={styles.avatar} src={src} alt="Avatar" />
	)
}
