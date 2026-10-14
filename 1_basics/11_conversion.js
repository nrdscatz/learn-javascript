/**
 * Type Conversion
 *
 * 1) 명시적
 * 2) 묵시적
 */
let age = 32;

// 명시적
let stringAge = age.toString(); // 문자열 변환 함수
console.log(typeof stringAge, stringAge);

let test = age + ""; // 문자열을 붙이면 문자열이 됨
console.log(typeof test, test);

console.log("98" + 2); // 문자열에 숫자를 붙여서 문자열이 됨
console.log("98" * 2); // 2를 곱하면 "98"이 숫자로 변환돼서 계산됨
console.log("98" - 2); // 2를 빼면 "98"이 숫자로 변환돼서 계산됨

// '+'라는 연산자의 이상한 현상을 이해하자는 것

/**
 * 명시적 변환들
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof true.toString(), true.toString());
console.log(typeof Infinity.toString(), Infinity.toString());

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0")); // 숫자로 변환할 수 있는 문자열(ex: '0', '102', '-2', ...)의 경우 parseInt로 숫자형으로 변환 가능
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1"); // 숫자로 변환할 수 있는 문자열에 '+'를 붙이면 숫자형으로 변환

// 불리언 타입으로 변환
console.log(!"x"); // false
console.log(!!"x"); // true
// 문자열 따옴표 안에 값이 있으면 불리언 시점에는 true이다.
console.log(!!""); // false
console.log(!!0); // false
console.log(!!"0"); // true
console.log(!!"false"); // true
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{}); // object는 무조건 true이다.
console.log(!![]); // array는 무조건 true이다.

/**
 * 1) 아무 글자도 없는 문자열
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환한다.
 */
