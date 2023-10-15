"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const q1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
const q2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
const q3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
const q4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];


let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;
let r5 = 0;

for (let i = 0; i < region1.length; i++) {
    r1 += region1[i];
}
for (let i = 0; i < region2.length; i++) {
    r2 += region2[i];
}
for (let i = 0; i < region3.length; i++) {
    r3 += region3[i];
}
for (let i = 0; i < region4.length; i++) {
    r4 += region4[i];
}
for (let i = 0; i < region5.length; i++) {
    r5 += region5[i];
}

let totalsales = r1 + r2 + r3 + r4 + r5;


/*
Work Harder, not smarter, right?
document.write('<h2>Sales by Quarter</h2><br />');
document.write(`<p><label>Q1: $</label> ${q1}</p>`);
document.write(`<p><label>Q2: $</label> ${q2}</p>`);
document.write(`<p><label>Q3: $</label> ${q3}</p>`);
document.write(`<p><label>Q4: $</label> ${q4}</p>`);

document.write('<h2>Sales by Region</h2><br />');
document.write(`<p><label>Region 1: $</label> ${r1}</p>`);
document.write(`<p><label>Region 2: $</label> ${r2}</p>`);
document.write(`<p><label>Region 3: $</label> ${r3}</p>`);
document.write(`<p><label>Region 4: $</label> ${r4}</p>`);
document.write(`<p><label>Region 5: $</label> ${r5}</p>`);
*/
document.write('<h2>Sales by Quarter</h2><br />');
document.write('Q1: $' + q1 + '<br />');
document.write('Q2: $' + q2 + '<br />');
document.write('Q3: $' + q3 + '<br />');
document.write('Q4: $' + q4 + '<br />');

document.write('<h2>Sales by Region</h2><br />');
document.write('Region 1: $' + r1 + '<br />');
document.write('Region 2: $' + r2 + '<br />');
document.write('Region 3: $' + r3 + '<br />');
document.write('Region 4: $' + r4 + '<br />');
document.write('Region 5: $' + r5 + '<br />');

document.write('<h2>Total Sales</h2><br/>');
document.write('$' + totalsales);
