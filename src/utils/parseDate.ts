import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function parseDate(date: Date) {
	const formattedDistance = formatDistanceToNow(new Date(date), { locale: ptBR, addSuffix: true })
	return formattedDistance
}