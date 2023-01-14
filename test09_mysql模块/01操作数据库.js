const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'aaa',
})

// db.query('select 1',(err,results)=>{
//     if(err){
//         return console.log(err.message)
//     }
//     console.log(results);
// })

//查询
// const sqlStr='select * from user'
// db.query(sqlStr, (err, results) => {
//     if(err){
//         return console.log(err.message)
//     }
//     //结果是数组
//     console.log(results);
// })

//插入
// const account={
//     name:'小明',
//     money:100,
//     email:'123@qq.com'
// }
// const sqlStr='insert into account (name,money,email) values (?,?,?)'
// db.query(sqlStr,[account.name,account.money,account.email],(err, results) => {
//     if(err){
//         return console.log(err.message)
//     }
//     //影响的行数为1才为成功
//     if(results.affectedRows==1){
//         console.log('插入成功');
//     }
// })

// const sqlStr='insert into account set ?'
// db.query(sqlStr,account,(err, results) => {
//     if(err){
//         return console.log(err.message)
//     }
//     //影响的行数为1才为成功
//     if(results.affectedRows==1){
//         console.log('插入成功');
//     }
// })

//更新
const account={
    id:43217,
    name:'小绿',
    money:500,
    email:'223@qq.com'
}
// const sqlStr='update account set name=?,money=? where id=?'
// db.query(sqlStr,[account.name,account.money,account.id],(err, results) => {
//     if(err){
//         return console.log(err.message)
//     }
//     //影响的行数为1才为成功
//     if(results.affectedRows==1){
//         console.log('更新成功');
//     }
// })

// const sqlStr='update account set ? where id=?'
// db.query(sqlStr,[account,account.id],(err, results) => {
//     if(err){
//         return console.log(err.message)
//     }
//     //影响的行数为1才为成功
//     if(results.affectedRows==1){
//         console.log('更新成功');
//     }
// })

//删除
const sqlStr='delete from account where id=?'
db.query(sqlStr,43218,(err, results) => {
    if(err){
        return console.log(err.message)
    }
    //影响的行数为1才为成功
    if(results.affectedRows==1){
        console.log('删除成功');
    }
})