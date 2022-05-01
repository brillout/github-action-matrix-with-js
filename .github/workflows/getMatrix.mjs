#!/usr/bin/env zx

let tests = (await quiet($`ls examples/`)).stdout.split(/\s/).filter(Boolean)

const matrixData = tests.map(test => {
  return { project: test, config: 'bla2' }
})

console.log(`{"include":${JSON.stringify(matrixData)}}`)
