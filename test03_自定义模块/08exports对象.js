console.log(exports);
console.log(module.exports);
console.log(exports===module.exports);

module.exports.name='b'
exports.name='a'

console.log(exports); //{ name: 'a' }
console.log(module.exports); //{ name: 'a' }

module.exports={
    name:'zs',
    age:1
}

exports={
    name:'ls',
    age:2
}

console.log(exports); //{ name: 'ls', age: 2 }
console.log(module.exports); //{ name: 'zs', age: 1 }