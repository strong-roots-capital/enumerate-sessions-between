import enumerateSessionsBetween from '../src/enumerate-sessions-between'
import moment from 'moment'

const start = moment.utc().startOf('day').toDate()
const end = moment.utc(start).add(1, 'day').toDate()
console.log(enumerateSessionsBetween('1D', start, end))
//=>[ 2019-04-15T00:00:00.000Z, 2019-04-16T00:00:00.000Z ]
