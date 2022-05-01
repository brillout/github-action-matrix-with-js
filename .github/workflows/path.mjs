#!/usr/bin/env zx

console.log(__dirname)
console.log(await quiet($`ls`))
console.log(await quiet($`pwd`))
/*
console.log(await quiet($`ls ./`))
console.log(await quiet($`ls ../`))
console.log(await quiet($`ls ../../`))
console.log(await quiet($`ls ../../examples/`))
*/
