import styles from './styles.module.css'
import igniteLogo from '../../assets/ignite.svg'
import pencilImg from '../../assets/pencil.svg'
import { Post, IPost } from '../../components/Post'
import { Avatar } from '../../components/Avatar'
import { Divider } from '../../components/Divider'
import { useEffect, useState } from 'react'
import { IComment } from '../../components/Post/Comment'

interface IUser {
	name: string;
	vocation: string;
	avatarUrl: string;
	https: string;
	backgroundUrl: string;
}


export function Home() {
	const [user, setUser] = useState<IUser>({} as IUser)
	const [posts, setPosts] = useState<IPost[]>([])

	useEffect(() => {
		fetch("/api/sessions")
			.then((response) => response.json())
			.then((json) => setUser(json.sessions[0]))

		fetch("/api/posts")
			.then((response) => response.json())
			.then((json) => setPosts(json.posts))
	}, [])

	function handleNewComment(postId: string, content: string) {
		const updatedPosts = posts.map(post => {
			if (post.id === postId) {
				const newId = String((posts.length + 1) * (post.comments.length + 1))
				const newComment: IComment = {
					id: newId,
					content,
					createdAt: new Date(),
					likes: 0,
					user
				}
				post.comments.push(newComment)
				return post
			}
			return post
		})
		setPosts(updatedPosts)
	}

	function handleDeleteComment(postId: string, commentId: string) {
		const postIndex = posts.findIndex(post => post.id === postId)
		posts[postIndex].comments = posts[postIndex].comments.filter(comment => comment.id !== commentId)
		setPosts([...posts])
	}

	function handleLikeComment(postId: string, commentId: string) {
		const postIndex = posts.findIndex(post => post.id === postId)
		const commentIndex = posts[postIndex].comments.findIndex(comment => comment.id === commentId)
		posts[postIndex].comments[commentIndex].likes++
		setPosts([...posts])
	}

	return (
		<div className={styles.home}>
			<header>
				<img src={igniteLogo} alt="Ignite Logo"></img>
				<span>Ignite Feed</span>
			</header>

			<div className={styles.content}>
				<aside>
					<div className={styles.profile}>
						<img className={styles.background} src={user.backgroundUrl} alt='background image'></img>
						<div className={styles.avatar}>
							<Avatar src={user.avatarUrl} />
						</div>
						<span className={styles.name}>{user.name}</span>
						<span className={styles.vocation}>{user.vocation}</span>
					</div>
					<Divider />
					<div className={styles.linkContainer}>
						<button>
							<img src={pencilImg} alt='edit'></img>
							<span>Editar seu perfil</span>
						</button>
					</div>
				</aside>
				<main>
					{posts.map(post => (
						<Post
							key={post.id}
							id={post.id}
							user={post.user}
							createdAt={post.createdAt}
							content={post.content}
							comments={post.comments}
							onNewComment={handleNewComment}
							onDeleteComment={handleDeleteComment}
							onLikeComment={handleLikeComment}
						/>
					))}
				</main>
			</div>
		</div>
	)
}