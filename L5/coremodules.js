const os=require('os');
const path=require('path');
const fs=require('fs');
const crypto=require('crypto');
const dns=require('dns');

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.totalmem()/(1024*1024*1024) + "GB");
// console.log(os.freemem()/(1024*1024) + "MB");

// const filePath=path.join(__dirname,"coremodules.js");
// console.log(filePath);

// const file= "coremodules.js";
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));

// const data=fs.readFileSync(path.join("sample.txt","utf-8");
// console.log(data);

// fs.readFile(path.join("sample.txt"),"utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//     else{
//         console.log("File read successfully");
//     }
// }   

// fs.writeFile(path.join(".\sample.txt"),"Hello, this is the updated data",(err)=>{
//     if(err)console.log(err);
// }

// fs.appendFileSync("sample.txt", "\nThis is the appended data");

// fs.unlinkSync("file.txt");

// fs.renameSync("sample.txt","newfile.txt");

// fs.copyFileSync("newfile.txt","copyfile.txt");

// const password="mysecretpassword";

//same hash for same password
// const hash=crypto.createHash('sha256').update(password).digest('hex');
// console.log(hash);

// const salt=crypto.randomBytes(16).toString('hex');
// const hash=crypto.createHmac('sha512', salt).update(password).digest('hex');
// console.log(hash);

// dns.lookup('www.google.com',(err,address,family)=>{
//     if(err) {
//       console.log(err);  
//     } else {
//         console.log(address);
//         console.log(family);
//     }   
// })

// dns.reverse('8.8.8.8', (err, hostnames) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(hostnames);
//     }
// });