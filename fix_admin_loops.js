const fs = require('fs');

const adminJsPath = 'd:/Desktop/RESEARCH/survey/research/public/admin.js';
let adminJs = fs.readFileSync(adminJsPath, 'utf8');

// Replace loops for Media Literacy (Q11-Q13 instead of Q10-Q12)
adminJs = adminJs.replace(/for \(let i = 10; i <= 12; i\+\+\)/g, 'for (let i = 11; i <= 13; i++)');
adminJs = adminJs.replace(/for \(let q = 10; q <= 12; q\+\+\)/g, 'for (let q = 11; q <= 13; q++)');

// Replace loops for Tech Adoption / Verif Behaviour (Q8-Q10 instead of Q7-Q8 or Q7-Q9)
adminJs = adminJs.replace(/for \(let i = 7; i <= 8; i\+\+\)/g, 'for (let i = 8; i <= 10; i++)');
adminJs = adminJs.replace(/for \(let q = 7; q <= 8; q\+\+\)/g, 'for (let q = 8; q <= 10; q++)');
adminJs = adminJs.replace(/for \(let i = 7; i <= 9; i\+\+\)/g, 'for (let i = 8; i <= 10; i++)');
adminJs = adminJs.replace(/for \(let q = 7; q <= 9; q\+\+\)/g, 'for (let q = 8; q <= 10; q++)');

fs.writeFileSync(adminJsPath, adminJs);
console.log("Fixed loops in admin.js");
