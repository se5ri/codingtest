// 정수 num1과 num2가 매개변수로 주어집니다.두 수가 같으면 1 다르면 - 1을 retrun하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
  var answer = 0;
  if (num1 === num2) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer;
}

/* 
if 문 작성법
if (조건식) {    // statement1} 
else if(조건식) {    // statement2 } 
else {    // statement3 }
- if 안에 있는 조건식이 참인 경우 해당하는 if문, else if문을 실행 한다.  
- 조건문(if, else if)에 모두 해당하지 않으면 else에 있는 statement3 이 실행된다.  
- else if에는 갯수 제한이 따로 없다.
*/
