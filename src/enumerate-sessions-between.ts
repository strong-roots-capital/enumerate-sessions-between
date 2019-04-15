/**
 * enumerate-sessions-between
 * Enumerate sessions between two dates (inclusive)
 */

import ow from 'ow'
import moment from 'moment'
import session from 'market-session'
import { addTimeframe } from '@strong-roots-capital/add-timeframe'
import { nextSessionOpen } from '@strong-roots-capital/next-session-open'
import { inTradingviewFormat } from '@strong-roots-capital/is-tradingview-format'


/**
 * TODO: document
 */
export default function enumerateSessionsBetween(
    timeframe: string,
    start: Date,
    end: Date
): Date[] {

    ow(timeframe, ow.string.is(inTradingviewFormat))
    ow(start, ow.date)
    ow(end, ow.date)
    ow(start, ow.date.is(
        () => start.valueOf() <= end.valueOf()
            || `Expected start (${start.toISOString()}) to precede end (${end.toISOString()})`
    ))

    let results: Date[] = []
    let enumerator = moment.utc(nextSessionOpen(timeframe, start)).startOf('minute').toDate()
    while (enumerator.valueOf() <= end.valueOf()) {
        results.push(enumerator)
        enumerator = addTimeframe(timeframe, enumerator)
    }
    return results
}
