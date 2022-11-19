import { Avatar } from '../../Avatar'
import { FaThumbsUp, FaTrashAlt } from 'react-icons/fa'
import styles from './styles.module.css'
import { parseDate } from '../../../utils/parseDate';

export interface IComment {
	id: string;
	user: {
		name: string;
		avatarUrl: string
	}
	createdAt: Date;
	content: string;
	likes: number
}

interface Props extends IComment {
	onDeleteComment: (id: string) => void
	onLikeComment: (id: string) => void
}

export function Comment({ id, content, createdAt, likes, user, onDeleteComment, onLikeComment }: Props) {
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
						<FaTrashAlt onClick={() => onDeleteComment(id)} />
					</header>
					<main>
						{content}
					</main>
				</div>
				<div className={styles.reaction} onClick={() => onLikeComment(id)}>
					<FaThumbsUp />
					<span>Aplaudir • {likes}</span>
				</div>
			</div>
		</div>
	)
}