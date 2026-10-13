/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

/**
 * 증가와 감소
 */

let num = 1;
num++;

num--;

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = num++;
console.log(result, num); // 1, 2

result = num--;
console.log(result, num); // 2, 1

result = --num;
console.log(result, num); // 0, 0

result = ++num;
console.log(result, num); // 1, 1

/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 */
let sample = "99";
console.log(typeof +sample); // number

sample = true;
console.log(typeof +sample); // number

sample = "99";
console.log(typeof -sample); // 숫자 -99

/**
 * 할당 연산자
 * 비교 연산자
 *  == 타입을 비교
 *  === 값 자체를 비교
 *  <
 *  >
 */
console.log(true == 1);
console.log(false == 0);

/**
 * 삼항 조건 연산자
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

/**
 * 논리 연산자
 *
 * &&: 모두 true여야 true를 반환한다.
 * ||: 하나만 true여도 true를 반환한다.
 */

/**
 * 단축 평가
 *
 * &&를 사용했을 때 좌측이 true이면 우측 값 반환
 * &&를 사용했을 때 좌측이 false이면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true이면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false이면 우측 값 반환
 */
console.log(true || "은희"); // true
console.log(false || "은희"); // 은희
console.log(true && true && "은희"); // 은희

/**
 * 지수 연산자
 * **
 */

/**
 * null 연산자
 * v = v ?? r -> 왼쪽 변수가 undefined이거나 null이라면 오른쪽 값을 넣어라
 */
let name;
console.log(name);

name = name ?? "은희";
console.log(name);

let name2;
name2 ??= "은희";
console.log(name2);
