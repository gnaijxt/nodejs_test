const m=require('./08exports对象')

// exports和module.exports指向的是同一个对象
// 但是使用require加载时最终结果以module.exports指向的对象为准
console.log(m);