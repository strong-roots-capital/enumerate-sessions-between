import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import enumerateSessionsBetween from '../src/enumerate-sessions-between'

test('should error when end is before start', t => {
    const timeframe = '1D'
    const end = moment.utc().startOf('day')
    const start = end.clone().add(1, 'day')
    const error = t.throws(() => {
        enumerateSessionsBetween(timeframe, start.toDate(), end.toDate())
    })
    t.is(error.name, 'ArgumentError')
})

test('should error when timeframe is not in tradingview format', t => {
    const timeframe = '!!'
    const error = t.throws(() => {
        enumerateSessionsBetween(timeframe, new Date(), new Date())
    })
    t.is(error.name, 'ArgumentError')
})
