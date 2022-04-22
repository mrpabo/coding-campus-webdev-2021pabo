import { parseISO, format } from 'date-fns'

export default function Date({ dateString, myString }) {
  const date = parseISO(dateString)
  return <><time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  {myString}
  </>
}
