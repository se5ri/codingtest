// 정수 배열 numbers가 매개변수로 주어집니다.numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  return numbers.map((num) => num * 2);
}

/* 
map()
map()은 배열의 각 요소를 하나씩 변환(transform) 해서 새로운 배열을 만들어 주는 함수
특징: 원본 배열을 변경하지 않음, 항상 새 배열을 반환, 값 반환이 없으면 undefined
*/
