// const num1 = parseInt(prompt("첫번째 숫자를 입력하세요"))
// const num2 = parseInt(prompt("두번째 숫자를 입력하세요"))
// let g = 0;
// if (num1>=num2){
//     for(let i=1; i <=num1; i++ ){
//         if(num1 % i === 0 && num2 % i === 0 ){
//             g=i;
//         }
//     }
// }else{
//     for(let i=1; i <=num2; i++ ){
//         if(num1 % i === 0 && num2 % i === 0 ){
//             g=i;
//         }
//     }
// }
// alert(`${num1}과 ${num2}의 최대공약수는 ${g}입니다.`)
const n = parseInt(prompt("첫번째 숫자를 입력하세요."));
const m = parseInt(prompt("두번째 숫자를 입력하세요."));

function getGCD(n,m){
    let min = Math.min(n,m)
    let GCD = 0;
    for(let i=1; i<=min; i++){
        if(n%i===0 && m%i===0){
            GCD=i;
        }
    }
    return GCD;
}
console.log(`${n}과 ${m}의 최대공약수는: ${getGCD(n,m)}`);
