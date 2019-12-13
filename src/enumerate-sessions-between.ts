/**
 * enumerate-sessions-between
 * Enumerate sessions between two dates (inclusive)
 */

import ow from 'ow'
import { addTimeframe } from '@strong-roots-capital/add-timeframe'
import { nextSessionOpen } from '@strong-roots-capital/next-session-open'


/**
 * Enumerate sessions between two dates (inclusive)
 *
 * @param timeframe - Session length in TradingView format
 * @param start - Date to start enumeration
 * @param end - Date to end enumeration
 * @returns List of open-session dates between start and end
 */
export default function enumerateSessionsBetween(
    timeframe: string,
    start: Date,
    end: Date
): Date[] {

    /* handled by dependency next-session-open */
    // ow(timeframe, ow.string.is(inTradingviewFormat))
    ow(start, ow.date)
    ow(end, ow.date)
    ow(start, ow.date.is(
        () => start.getTime() <= end.getTime()
            || `Expected start (${start.toISOString()}) to precede end (${end.toISOString()})`
    ))
    const endTime = end.getTime()

    const results: Date[] = []
    let enumerator = nextSessionOpen(timeframe, start)
    while (enumerator.getTime() <= endTime) {
        results.push(enumerator)
        enumerator = addTimeframe(timeframe, enumerator)
    }
    return results
}
