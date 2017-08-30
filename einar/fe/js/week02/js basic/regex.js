//A regular expression is an object that describes a pattern of characters.

var re1 = /^abc/; //^start of input
//if there's a letter in the regex you should expect to find it
var re2 = /abc/g; // global i search for a-l-l abc in the string
var re3 = /a[x-z]c/g; //one letter that can be between axc/ayc/azc
//g - look everywhere in the string. without g he would stop when he finds first!
var re4 = /a[x-z]c$/g; //$ find last combo in string!
var re5 = /a[\+-]*c/g // \escapes the + sign and * means the experssion in [] before the * can be shown more than 0 times

var str1 = "123abc";
var str2 = "abc123";
var str3 = "abcttttabc----ab---bc---cba++abc*";
var str4 = "axcttttabc-a+c---a--c--a+-c--ab-a#c--bc-ayc--cba++axc*";

//arrays
//var test1 = re1.exec(str1);
var test2 = re1.exec(str2); //abc123

//match is a function that gets REGEX and returns an array with ALL options found but without indexs

var res = str3.match(re2); //[abc,abc,abc]
var res2 = str4.match(re3);//[axc,ayc,axc]
var res3 = str4.match(re4);// axc
var res5 = str4.match(re5);// a+c, a--c, a+-c

//exec works each run on ONE index A TIME and remember it
var test3 = re2.exec(str3); //index 0
var test4 = re2.exec(str3);//index 7
var test5 = re2.exec(str1); //null
var test6 = re2.exec(str3);// index 29

console.log(res); //[abc,abc,abc]
console.log(test2);
console.log(test3);
console.log(res2);//[axz]
