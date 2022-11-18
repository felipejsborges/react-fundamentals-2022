import { parseDate } from '../../utils/parseDate'
import { Avatar } from '../Avatar'
import { Divider } from '../Divider'
import { Comment, IComment } from './Comment'
import styles from './styles.module.css'

export interface IPost {
	user: {
		name: string;
		vocation: string;
		avatarUrl: string;
	}
	createdAt: Date;
	content: string[];
	comments: IComment[];
}

export function Post({ comments, content, createdAt, user }: IPost) {
	return (
		<div className={styles.post}>
			<header>
				<div className={styles.profile}>
					<Avatar src={user.avatarUrl} />
					<div className={styles.userData}>
						<strong>
							{user.name}
						</strong>
						<span>
							{user.vocation}
						</span>
					</div>
				</div>
				<span>
					{parseDate(createdAt)}
				</span>
			</header>
			<article>
				{content.map(line => <p key={line}>{line}</p>)}
			</article>
			<Divider />
			<footer>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder='Escreva um comentário...' />
				<button>
					Publicar
				</button>
			</footer>
			<div className={styles.commentsList}>
				{comments.map(comment => (
					<Comment
						key={comment.createdAt.toString()}
						content={comment.content}
						createdAt={comment.createdAt}
						likes={comment.likes}
						user={comment.user}
					/>))}
			</div>
		</div>
	)
}