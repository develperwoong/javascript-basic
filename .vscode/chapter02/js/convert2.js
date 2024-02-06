let cm 
let inch= parseInt(prompt("인치 값을 입력하세요"))
cm = (2.54 * inch).toFixed(1);
alert(`${inch}인치는 ${cm}cm 입니다.`)
