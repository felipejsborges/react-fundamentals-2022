import styles from './styles.module.css'
import igniteLogo from '../../assets/ignite.svg'
import pencilImg from '../../assets/pencil.svg'
import { Post } from '../../components/Post'
import { Avatar } from '../../components/Avatar'
import { Divider } from '../../components/Divider'

export function Home() {
	return (
		<div className={styles.home}>
			<header>
				<img src={igniteLogo} alt="Ignite Logo"></img>
				<span>Ignite Feed</span>
			</header>

			<div className={styles.content}>
				<aside>
					<div className={styles.profile}>
						<img className={styles.background} src="https://images.unsplash.com/photo-1498671546682-94a232c26d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=40" alt='background image'></img>
						<div className={styles.avatar}>
							<Avatar src="https://github.com/felipejsborges.png" />
						</div>
						<span className={styles.name}>Clayton Kleber</span>
						<span className={styles.vocation}>Dev Front End</span>
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
					<Post />
					<Post />
					<Post />
				</main>
			</div>
		</div>
	)
}