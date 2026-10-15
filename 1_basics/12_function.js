function line(text = "") {
  console.log(`-------------------${text}-------------------`);
}

/**
 * Function
 */

/**
 * 만약에 2라는 숫자에 * 10/2%3 스트링으로 변환해서 반환받고 싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString()); // 2가 아닌 3으로 할 때, 2와 3을 제외한 모든 코드가 중복이다.

line();

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate(num /* 매개변수 */) {
  console.log((((num * 10) / 2) % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(2);
calculate(3);
calculate(4);
calculate(5);

line();

// 두 개의 파라미터를 받음
function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 4);

// 디폴트 파라미터
function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(2);
multiply(2, 4);

line();

/**
 * 반환받기
 * return 받기
 */
function multiplyReturn(x, y) {
  return x * y;
}

const result = multiplyReturn(2, 4);
console.log(result);

line("Arrow Function");

/**
 * Arrow
 */
const multiplyArrow = (x, y) => x * y;

const result2 = multiplyArrow(2, 4);
console.log(result2);

const multiplyArrow2 = (x) => x * 2;
const result3 = multiplyArrow2(2);
console.log(result3);

// * '순차적으로 전달받은 x, y, z 인자를 포함한 문자열을 반환하는 함수' = 'x, y, z를 순차적으로 받아 문자열로 조합하는 커링 함수'
// 1. x라는 파라미터를 받는 함수가 정의됨
// 2. 1은 y라는 파라미터를 받는 또 하나의 함수를 반환함
// 3. 2는 z라는 파라미터를 받는 또 하나의 함수를 반환함
// 4. 그리고 3은 x, y, z가 포함된 문자열을 반환함
const multiplyArrow3 = (x) => (y) => (z) => `x: ${x}, y:${y}, z: ${z}`;
console.log(multiplyArrow3(2)); // [Function (anonymous)]
console.log(multiplyArrow3(2)(5)); // [Function (anonymous)]
console.log(multiplyArrow3(2)(5)(7)); // x: 2, y:5, z: 7

line("Function and Anonymous Function");

function multiplyArrow4(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}
console.log(multiplyArrow4(2)); // [Function (anonymous)]
console.log(multiplyArrow4(2)(5)); // [Function (anonymous)]
console.log(multiplyArrow4(2)(5)(7)); // x: 2, y:5, z: 7

line();

const multiplyArrow5 = function (x, y) {
  return x * y;
};

console.log(multiplyArrow5(2, 4));

line("Arguments");

const multiplyThree = function (x, y, z) {
  console.log(arguments); // arguments 키워드 -> 함수를 실행할 때 입력한 인자를 출력한다.
  return x * y * z;
};

console.log(multiplyThree(4, 5, 6));

line();

const multiplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

line("즉시 실행 함수");

(function (x, y) {
  console.log(x * y);
})(4, 5);

line("instanceof");
console.log(typeof multiply); // function
console.log(multiply instanceof Object); // multiply 함수가 Object인가?
