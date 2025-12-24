// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
  const denom = denom1 * denom2;
  const numer = numer1 * denom2 + numer2 * denom1;

  // 최대공약수 구하기 (유클리드 호제법)
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  const g = gcd(numer, denom);

  return [numer / g, denom / g];
}

/* 

## 문제풀이

1. 분수를 더하기 위해 **통분**
2. 더한 결과를 **최대공약수(GCD)**로 나누어 기약분수로 변환
3. 결과를 배열로 반환

---

## 분수 덧셈 (통분하기)

```jsx
const denom = denom1 * denom2;
const numer = numer1 * denom2 + numer2 * denom1;
```

---

## 최대공약수(GCD) 구하기 — 유클리드 호제법

- **최대공약수(GCD)**: 두 수를 동시에 나눌 수 있는 가장 큰 수
- 기약분수를 만들기 위해 반드시 필요

---

### 유클리드 호제법 핵심 원리

```
gcd(a, b) =gcd(b, a% b)
```

- `b === 0` 이면 → `a`가 최대공약수
- 그렇지 않으면 `(a, b)`를 `(b, a % b)`로 바꿔 반복

---

### GCD 함수 코드

```jsx
functiongcd(a, b) {
if (b ===0) {
return a;
  }
return gcd(b, a % b);
}
```

---

### GCD 동작 예시

`gcd(12, 8)` 실행 과정:

1. `gcd(12, 8)` → `gcd(8, 4)`
2. `gcd(8, 4)` → `gcd(4, 0)`
3. `b === 0` → `4` 반환

---

## 기약분수로 만들기

```jsx
const g =gcd(numer, denom);
return [numer / g, denom / g];
```

- 분자와 분모를 최대공약수 `g`로 나누면 **기약분수 완성**
- 배열 형태로 반환


*/
