// 최빈값 구하기
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
function solution(array) {
  // 빈도 저장(객체)
  const count = {}; // {값: 등장횟수}

  // 숫자 등장 횟수 세기
  // for...of는 배열이나 반복 가능한 객체의 요소를 하나씩 꺼내어 순회하는 반복문(배열의 요소 자체를 하나씩 꺼냄)
  for (let num of array) {
    count[num] = (count[num] || 0) + 1; // 처음 등장 nudefuned||0->1, 이미등장 -> 기존값+1
  }

  let maxCount = 0; // 현재까지의 최대 빈도

  // 최대 빈도 찾기
  // for...in은 객체(Object)의 각 속성(key)을 하나씩 순회하는 반복문(객체의 Key를 하나씩 순회)
  // 현재 값의 등장 횟수가 더 크면 갱신
  for (let key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
    }
  }
  let mode = null; // 그때의 값(최빈값)
  let modeCount = 0; // 최빈값이 몇 개 인지 카운드

  // 최대빈도를 가진 값 찾기
  for (let key in count) {
    if (count[key] === maxCount) {
      mode = Number(key); // key는 문자열이므로 Number(key)로 변환
      modeCount++;
    }
  }
  // 최빈값이 여러개면 -1
  return modeCount === 1 ? mode : -1; // 조건식이 참이면 mode, 아니면 -1
}
