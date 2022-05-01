#!/usr/bin/env zx

console.log(await quiet($`ls`))
console.log(await quiet($`ls ./`))
console.log(await quiet($`ls ../`))
console.log(await quiet($`ls ../../`))
console.log(await quiet($`ls ../../examples/`))
