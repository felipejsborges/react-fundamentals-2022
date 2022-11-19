import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
	let server = createServer({
		environment,

		models: {
			session: Model,
			post: Model,
		},

		seeds(server) {
			server.create("session", { name: "Clayton Kleber", vocation: "Dev Front End", avatarUrl: "https://github.com/felipejsborges.png", backgroundUrl: "https://images.unsplash.com/photo-1498671546682-94a232c26d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=40" })
			server.create("post", {
				id: '1',
				user: { name: "Joanilson Junior", vocation: "Dev Full Stack", avatarUrl: "https://github.com/cp-yago.png" }, createdAt: new Date('2022-11-15'),
				content: [
					'Fala galeraa 👋',
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
					'👉 jane.design/doctorcare'
				],
				comments: [{
					id: '1',
					user: {
						name: "Cristiano Penaldo",
						avatarUrl: "https://github.com/cp-yago.png",
					},
					createdAt: new Date('2022-11-15'),
					content: 'Chupa Messi. Aqui é o robozão!',
					likes: 5
				}, {
					id: '2',
					user: {
						name: "Neymar Junior",
						avatarUrl: "https://github.com/cp-yago.png",
					},
					createdAt: new Date('2022-11-15'),
					content: 'Faltou ousadia parça',
					likes: 11
				}, {
					id: '3',
					user: {
						name: "Ibraimo Vitti",
						avatarUrl: "https://github.com/cp-yago.png",
					},
					createdAt: new Date('2022-11-17'),
					content: 'Quem são vcs?',
					likes: 1
				}]
			})
			server.create("post", {
				id: '2',
				user: { name: "Jandyra Jubira", vocation: "Jogador de lol", avatarUrl: "https://github.com/cp-yago.png" }, createdAt: new Date('2022-11-01'),
				content: [
					'Fala galeraa 👋',
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
					'👉 jane.design/doctorcare'
				],
				comments: [{
					id: '4',
					user: {
						name: "Cristiano Penaldo",
						avatarUrl: "https://github.com/cp-yago.png",
					},
					createdAt: new Date('2022-11-02'),
					content: 'Chupa Messi. Aqui é o robozão!',
					likes: 23
				}, {
					id: '5',
					user: {
						name: "Neymar Junior",
						avatarUrl: "https://github.com/cp-yago.png",
					},
					createdAt: new Date('2022-11-05'),
					content: 'Faltou ousadia parça',
					likes: 24
				}, {
					id: '6',
					user: {
						name: "Ibraimo Vitti",
						avatarUrl: "https://github.com/cp-yago.png",
					},
					createdAt: new Date('2022-11-09'),
					content: 'Quem são vcs?',
					likes: 17
				}]
			})
		},

		routes() {
			this.namespace = "api"

			this.get("/sessions", (schema) => {
				return schema.sessions.all()
			})

			this.get("/posts", (schema) => {
				return schema.posts.all()
			})
		},
	})

	return server
}