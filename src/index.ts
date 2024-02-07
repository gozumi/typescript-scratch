const iterator1 = makeRangeIterator(1, 100, 3)
const iterator2 = makeRangeIterator(1, 100, 7)
const iterationGenerator1 = makeRangeGenerator(1, 100, 8)
const iterationGenerator2 = makeRangeGenerator(1, 100, 9)

let result1 = iterator1.next()
let result2 = iterator2.next()
let generatedResult1 = iterationGenerator1.next()
let generatedResult2 = iterationGenerator2.next()

while (!result1.done) {
  console.log({
    result1: result1.value,
    result2: result2.value,
    generatedResult1: generatedResult1.value,
    generatedResult2: generatedResult2.value,
  })
  result1 = iterator1.next()
  result2 = iterator2.next()
  generatedResult1 = iterationGenerator1.next()
  generatedResult2 = iterationGenerator2.next()
}

console.log(`Iterated over sequence of size ${result1.value}`)

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

function* makeRangeGenerator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0

  for (let i = start; i < end; i += step) {
    iterationCount++
    yield i
  }

  return iterationCount
}
