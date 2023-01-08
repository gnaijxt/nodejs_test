//在一个自定义模块中，默认情况下，module。exports={}
module.exports.username='张三'
module.exports.sayHello=function(){
    console.log('大家好，我是'+username);
}

const age=18
module.exports.age=age;

//让module.exports指向一个全新的对象
//使用require导入时，永远以module.exports指向的对象为准
module.exports={
    username:'zs',
    sayHi(){
        console.log('hi');
    }
}