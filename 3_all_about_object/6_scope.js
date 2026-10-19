/**
 * Scope
 */
var numberOne = 20;

function levelOne() {
  // 함수 내에서는 상위 스코프(전역)의 변수를 사용할 수 있다.
  console.log(numberOne);
}

// levelOne();

function levelOne() {
  var numberOne = 40;
  // 가장 가까운 스코프에 있는 값을 가져온다.
  console.log(numberOne);
}

// levelOne();

// 함수 내에서는 40이었지만 함수 밖에서는 numberOne 변수는 전역 스코프를 따라간다.
console.log(numberOne);

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo: ${numberTwo}`); // 99
    console.log(`levelTwo numberOne: ${numberOne}`); // 40
  }

  levelTwo();

  console.log(`levelOne numberOne: ${numberOne}`); // 40
}

levelOne();
// console.log(numberOne);
// console.log(numberTwo); // Error -> 하위 스코프에는 접근할 수 없음

/**
 * **
 * JS -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 *
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne() {
  var numberThree = 100;

  functionTwo();
}

function functionTwo() {
  console.log(numberThree); // 3 -> Global Scope에서 값을 가져왔다.
}

// functionOne();

var i = 999;

for (var i = 0; i < 10; i++) {
  console.log(i); // 0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n
}

console.log(`i in global scope: ${i}`); // 10 -> 999가 아닌 10!!!

i = 999;
// block level scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope: ${i}`); // 999

/**
 * ***
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */
