import styles from './styles.module.css'
import igniteLogo from '../../assets/ignite.svg'
import pencilImg from '../../assets/pencil.svg'

export function Home() {
	return (
		<div>
			<header>
				<img src={igniteLogo} alt="Ignite Logo"></img>
				<span>Ignite Feed</span>
			</header>

			<div className={styles.content}>
				<aside>
					<div className={styles.profile}>
						<img className={styles.background} src="https://images.unsplash.com/photo-1498671546682-94a232c26d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=40" alt='background image'></img>
						<img className={styles.avatar} src="https://github.com/felipejsborges.png" alt='profile image'></img>
						<span className={styles.name}>Clayton Kleber</span>
						<span className={styles.vocation}>Dev Front End</span>
					</div>
					<div className={styles.linkContainer}>
						<button>
							<img src={pencilImg} alt='edit'></img>
							<span>Editar seu perfil</span>
						</button>
					</div>
				</aside>
				<main></main>
			</div>
		</div>
	)
}