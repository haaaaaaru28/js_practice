 // vaise toh normal comparison he hota h dekho 
 console.log(2 ==1 );// ese 
 // par compare krte huye ye dhyan rakhna ki data type same hona chahiye 
 // haan hame pata h ki vo khud bhi change kr deta h js but kabhi kabhi desired output ni aata h toh hame problem aayegi toh dhyan rakhna 

 console. log(null> 0);// false
console. log(null == 0);// false
console. log(null >= 0);// true 
// ye alag alag isliye work kr rhe h because comparison and equalty check operators(==) are different 
// comparison operators convert kr dete h null ko 0 mai isliye null> 0 false h but null>= 0 true hai 

console.log(undefined==0 );// false
console.log(undefined>0 );// false
console.log(undefined<0 );// false
//  null and undefined vale comparision ko avoid krna hai 
// === strict check , data type bhi check krta h value ke saath 

console.log("2"===2); // false aayega 
