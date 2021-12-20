function test(fn) {
  try {
    console.log('11111')
    return fn()
  } finally {
    console.log('2222')
  }
}
function testFn() {
  console.log('333333')
  return '44444'
}
console.log(test(testFn))