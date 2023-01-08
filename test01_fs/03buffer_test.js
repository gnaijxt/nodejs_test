var str = 'Hello前端'

var buf = Buffer.from(str)

// 占用内存的大小，一个汉字3字节 11
console.log(buf.length)

// 字符串的长度 7
console.log(str.length)

// 8进制输出第一个元素 145
console.log(buf[1].toString(8))

//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10)
//通过索引，来操作buf中的元素
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[3] = 255
console.log(buf2);

var buf3 = Buffer.allocUnsafe(10)
console.log(buf3)