import { Avatar } from '../../Avatar'
import { FaThumbsUp, FaTrashAlt } from 'react-icons/fa'
import styles from './styles.module.css'

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src='https://github.com/felipejsborges.png' />
			<div className={styles.commentContainer}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorData}>
							<strong>
								Cristiano Ronaldo
							</strong>
							<span>
								Cerca de 2h
							</span>
						</div>
						<FaTrashAlt />
					</header>
					<main>
						Chupa Messi. Aqui é o robozão!
					</main>
				</div>
				<div className={styles.reaction}>
					<FaThumbsUp />
					<span>Aplaudir • 03</span>
				</div>
			</div>
		</div>
	)
}