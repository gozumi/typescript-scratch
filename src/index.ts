function makeRangeIterator(start = 0, end = Infinity, step = 3) {
  let nextIndex = start
  let iterationCount = 0

  const rangeIterator = {
    next() {
      let result
      if (nextIndex < end) {
        result = { value: nextIndex, done: false }
        nextIndex += step
        iterationCount++
        return result
      }
      return { value: iterationCount, done: true }
    },
  }
  return rangeIterator
}
