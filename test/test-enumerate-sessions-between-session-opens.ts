import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import enumerateSessionsBetween from '../src/enumerate-sessions-between'

test('should return start and end when start and end are adjacent session-opens', t => {
    const timeframe = '1D'
    const start = moment.utc().startOf('day')
    const end = start.clone().add(1, 'day')
    const expected = [start.toDate(), end.toDate()]
    t.deepEqual(expected, enumerateSessionsBetween(timeframe, start.toDate(), end.toDate()))
})

test('should return sessions between start and end when not adjacent session-opens', t => {
    const timeframe = '1D'
    const start = moment.utc().startOf('day')
    const middle = start.clone().add(1, 'day')
    const end = start.clone().add(2, 'day')
    const expected = [start.toDate(), middle.toDate(), end.toDate()]
    t.deepEqual(expected, enumerateSessionsBetween(timeframe, start.toDate(), end.toDate()))
})

test('should return a single date when start equals end', t => {
    const timeframe = '1D'
    const start = moment.utc().startOf('day')
    const expected = [start.toDate()]
    t.deepEqual(expected, enumerateSessionsBetween(timeframe, start.toDate(), start.toDate()))
})
