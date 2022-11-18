import styles from './styles.module.css'
import igniteLogo from '../../assets/ignite.svg'
import pencilImg from '../../assets/pencil.svg'
import { Post, IPost } from '../../components/Post'
import { Avatar } from '../../components/Avatar'
import { Divider } from '../../components/Divider'
import { useEffect, useState } from 'react'

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
							key={post.createdAt.toString()}
							user={post.user}
							createdAt={post.createdAt}
							content={post.content}
							comments={post.comments}
						/>
					))}
				</main>
			</div>
		</div>
	)
}