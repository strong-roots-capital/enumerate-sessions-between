# enumerate-sessions-between [![Build status](https://travis-ci.org/strong-roots-capital/enumerate-sessions-between.svg?branch=master)](https://travis-ci.org/strong-roots-capital/enumerate-sessions-between) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/enumerate-sessions-between.svg)](https://npmjs.org/package/@strong-roots-capital/enumerate-sessions-between) [![codecov](https://codecov.io/gh/strong-roots-capital/enumerate-sessions-between/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/enumerate-sessions-between)

> Enumerate sessions between two dates (inclusive)

## Install

```shell
npm install @strong-roots-capital/enumerate-sessions-between
```

## Use

```typescript
import enumerateSessionsBetween from '@strong-roots-capital/enumerate-sessions-between'
import moment from 'moment'

const start = moment.utc().startOf('day').toDate()
const end = moment.utc(start).add(1, 'day').toDate()
console.log(enumerateSessionsBetween('1D', start, end))
//=>[ 2019-04-15T00:00:00.000Z, 2019-04-16T00:00:00.000Z ]
```

## Related

- [is-tradingview-format](https://github.com/strong-roots-capital/is-tradingview-format)
- [add-timeframe](https://github.com/strong-roots-capital/add-timeframe)
- [next-session-open](https://github.com/strong-roots-capital/next-session-open)
