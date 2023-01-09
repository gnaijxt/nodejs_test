const tool=require('./jxt-tools/index')

const dtStr=tool.dateFormat(new Date())
console.log(dtStr);

const htmlstr='<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str=tool.htmlEscape(htmlstr);
console.log(str);