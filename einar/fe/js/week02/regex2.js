var re = /(ab)+/g;
var re1 = /abcd/g;
var re2 = /<[A-Za-z][A-Za-z0-9]*> /
var email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;


/*
dicitonary:
n? => match zero or one n (optional)
n* => match 0 times or more n's.
n+ =>	Match at least one n
^ => find an expression that stars with the preceding token
$ => find an expression that ends with the token before the $
.	=> Match any character
{2,} => minimum range of 2 => means at least 2 tokens
{ , } => empty range
{2,4} => range between 2 to 4
{7} => only range of seven spots
\b =>  "word boundary" means it does not match a character, it matches a position with 1 thing on the left side and another thing on the right side.
\B => Match a character not at beginning or end of a word

\w => word
\w? => a word would be optionaly found
\W => a non-word character
\d => match any digit
\D => match any non digit

\d{3} => match execatly 3 digits
[a-c]{1-3} => will match any a b or c at least one time and up to 3 times

(\d\w)+ => would match any digit followed by char (like: 3k5t7u8b2n1s)
[A-Za-z0-9\s]{3,19} => series of letters,digits or white space that's between 3 and 19
\s => matches whitespace (spaces, tabs and new lines)
\S => matches non whitespace character

i =>	Perform case-insensitive matching
g => perform global match

[abc] => matches single character a or b or c
[^abc] => matches any character except a or b or c
[A-z] => matches any character from uppercase A to lowercase z
(ab|cd|ef) => matches either ab cd or ef
(....) => matches anything enclosed
*/
var str2 = "ab______________abab_______ab___";
var test = re1.exec(str2);
console.log("test" + test);


var re1 =/(a[0-9]?b)(cd)\1/g;
// \1 at least one more time the experssion that's inside (a[0-9]?b) => a5bcda5b
var re2 =/(a[0-9]?b)(cd)\1\1/g; //2 times the first experssion =>a5bcda5ba5b
//mis match!! a5bcda6b

//ab | abb | a and more than one b (the closest to +)
var re3 = /(ab?)(cd)/g;// a | b |ab the most!
var re4 = /(ab)(cd)\2\2/; // a | b |ab the most!

var str = "----------a7bcda8b----a6bcda6b____abcdab____a1bdda1b";

do{
  var test1 = re2.exec(str);
  var test2 = re3.exec(str); //
  var test4 = re1.exec(str);
} while(test2 != null && test1 != null)

console.log(test2); //null
console.log(test4); //["a6bcda6b", "a6b", "cd"]
console.log(test1);//["abcd", "ab", "cd"]
