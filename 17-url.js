// 分解讲解, 第一步 url.parse(path,true)

var url = require('url');

var str = 'http://localhost:8081/name=zhang&age=13';

console.log(url.parse(str,true));
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8081',
  port: '8081',
  hostname: 'localhost',
  hash: null,
  search: '?name=zhang&age=13',
  query: { name: 'zhang', age: '13' },
  pathname: '/abc',
  path: '/abc?name=zhang&age=13',
  href: 'http://localhost:8081/abc?name=zhang&age=13'
}
*/
