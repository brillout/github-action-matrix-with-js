#!/usr/bin/env zx

let tests = (await quiet($`ls examples/`)).stdout.split(/\s/).filter(Boolean)

const matrixData = tests.map(test => {
  return { project: test, config: 'bl' }
})

console.log(`{"include":${JSON.stringify(matrixData)}}`)
//console.log('{"include":[{"project":"foo 11","config":"Debug"},{"project":"bar lije","config":"Release"}]}')
