let userInput = prompt("숫자를 입력하세요");
if(userInput !== null){
    userInput = parseInt(userInput)
    (userInput % 2 ===0)? alert(`${userInput}:짝수`) : alert(`${userInput}:홀수`);
}else {
    alert('잘못된 값을 입력하셨습니다.')
}
