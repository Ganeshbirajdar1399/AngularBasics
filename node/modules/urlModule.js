const {URL} = require ("url")

const sampleUrl = 'https://drive.google.com:6000/drive/u/1/shared-with-me?user=12';

const data = new URL(sampleUrl);

console.log("host:",data.host);
console.log("hostname:",data.hostname);
console.log("origin:",data.origin);
console.log("port:",data.port);
console.log("href:",data.href);
console.log("protocol:",data.protocol);
console.log("Query:",data.searchParams.get('user'));
console.log("Query:",data.searchParams.has('app'));
console.log("pathname:",data.pathname);