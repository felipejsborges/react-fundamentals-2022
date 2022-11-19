import { useState } from 'react'
import { parseDate } from '../../utils/parseDate'
import { Avatar } from '../Avatar'
import { Divider } from '../Divider'
import { Comment, IComment } from './Comment'
import styles from './styles.module.css'

export interface IPost {
	id: string;
	user: {
		name: string;
		vocation: string;
		avatarUrl: string;
	}
	createdAt: Date;
	content: string[];
	comments: IComment[];
}

interface Props extends IPost {
	onNewComment: (id: string, newComment: string) => void
	onDeleteComment: (id: string, commentId: string) => void
	onLikeComment: (id: string, commentId: string) => void
}

export function Post({ id, comments, content, createdAt, user, onNewComment, onDeleteComment, onLikeComment }: Props) {
	const [newComment, setNewComment] = useState('')

	function handleDeleteComment(commentId: string) {
		onDeleteComment(id, commentId)
	}

	function handleLikeComment(commentId: string) {
		onLikeComment(id, commentId)
	}

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
				<textarea placeholder='Escreva um comentário...' onChange={(e) => setNewComment(e.target.value)} value={newComment} />
				<button onClick={() => {
					onNewComment(id, newComment)
					setNewComment('')
				}}>
					Publicar
				</button>
			</footer>
			<div className={styles.commentsList}>
				{comments.map(comment => (
					<Comment
						key={comment.id}
						id={comment.id}
						content={comment.content}
						createdAt={comment.createdAt}
						likes={comment.likes}
						user={comment.user}
						onDeleteComment={handleDeleteComment}
						onLikeComment={handleLikeComment}
					/>))}
			</div>
		</div>
	)
}