// 몫 구하기

function solution(num1, num2) {
  var answer = 0;
  answer = parseInt(num1 / num2);
  return answer;
}

/* parseInt
parseInt는 정수 값을 반환하기 위해 소수점 이하 값을 잘라냅니다.
즉, 예를 들어 값이 2.43일 때, 소수점 뒤에 값을 자르고 앞의 정수의 값인 2만 출력됨.
*/
