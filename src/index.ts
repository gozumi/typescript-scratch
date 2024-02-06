const iter = makeRangeIterator(1, 100, 3)

let result = iter.next()

while (!result.done) {
  console.log(result.value)
  result = iter.next()
}

console.log(`Iterated over sequence of size ${result.value}`)

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
