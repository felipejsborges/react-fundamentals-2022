import { Avatar } from '../Avatar'
import { Divider } from '../Divider'
import styles from './styles.module.css'

export function Post() {
	return (
		<div className={styles.post}>
			<header>
				<div className={styles.profile}>
					<Avatar src="https://github.com/felipejsborges.png" />
					<div className={styles.userData}>
						<strong>
							Joanilson Junior
						</strong>
						<span>
							Dev Full Stack
						</span>
					</div>
				</div>
				<span>
					Publicado há 3 dias
				</span>
			</header>
			<article>
				<p>Fala galeraa 👋</p>
				<br/ >
				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<br/ >
				<p>👉 jane.design/doctorcare</p>
				<br/ >
				<p>#novoprojeto #nlw #rocketseat</p>
			</article>
			<Divider />
			<footer>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder='Escreva um comentário...' />
				<button>
					Publicar
				</button>
			</footer>
		</div>
	)
}