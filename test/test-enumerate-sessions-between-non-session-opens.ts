import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import enumerateSessionsBetween from '../src/enumerate-sessions-between'

test('should return next session open of start and all values between it and end (inclusive)', t => {
    const timeframe = '1D'
    const start = moment.utc().startOf('day')
    const end = start.clone().add(1, 'day')
    const expected = [start.toDate(), end.toDate()]
    t.deepEqual(expected, enumerateSessionsBetween(
        timeframe,
        start.clone().subtract(1, 'minute').toDate(),
        end.clone().add(1, 'minute').toDate()))
})
