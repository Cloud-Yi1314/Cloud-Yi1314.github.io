//用js 实现一个无限极累加的函数， 形如
// add(1) //=> 1;
// add(1)(2)  //=> 2;
// add(1)(2)(3) //=>  6;
// add(1)(2)(3)(4) //=> 10; 以此类推

//无限单参数
// function add(a){
//     function again(b){
//         a = a+b;
//         return again;
//     }
//     again.toString = function(){return a;}
//     return again;
// }

//无限多参数
function add(...a){
    let result = a.reduce((t, c) => t + c);     //t: total,c: currentValue
    function again(...b){
        result += b.reduce((t, c) => t + c);
        return again;
    }
    again.toString = function(){
        return result;
    }
    return again;
}

let num1=add(1)(2)(3)(4);
let num2=add(1,2)(3,4);
let text= `实现add函数，参数不固定，可以无限累加，例如：
add(1)(2)(3)(4)=${num1},
add(1,2)(3,4)=${num2}`

console.log(text);