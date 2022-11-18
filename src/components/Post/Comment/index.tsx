import { Avatar } from '../../Avatar'
import { FaThumbsUp, FaTrashAlt } from 'react-icons/fa'
import styles from './styles.module.css'
import { parseDate } from '../../../utils/parseDate';

export interface IComment {
	user: {
		name: string;
		avatarUrl: string
	}
	createdAt: Date;
	content: string;
	likes: 5
}

export function Comment({ content, createdAt, likes, user }: IComment) {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src={user.avatarUrl} />
			<div className={styles.commentContainer}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorData}>
							<strong>
								{user.name}
							</strong>
							<span>
								{parseDate(createdAt)}
							</span>
						</div>
						<FaTrashAlt />
					</header>
					<main>
						{content}
					</main>
				</div>
				<div className={styles.reaction}>
					<FaThumbsUp />
					<span>Aplaudir • {likes}</span>
				</div>
			</div>
		</div>
	)
}