/**
 * Closure
 *
 * A closure is the combination of a function add the lexical environment within which that function was declared
 *
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 *
 * "상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다."
 */
function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber();
}

// console.log(number); Error

// console.log(getNumber()); // 5

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber();

console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5

/**
 * 상위 함수에서 하위 함수를 반환하므로써 상위 함수의 실행이 끝나고 하위 함수를 나중에 실행할 수 있는 개념인 것이다.
 */

/**
 * 예제 1. 데이터 캐싱
 */
function cacheFunction(newNumber) {
  // 아래 계산은 매우 오래 걸린다는 가정을 했을 때 cacheFunction()을 매번 호출해 실행하면 부담이 된다.
  var number = 10 * 10;
  // 이 부담을 줄이는 방법은 클로저를 만드는 것인데, 이렇게 하면 (아래에서 계속...)
  function innerCacheFunction(newNumber) {
    return number * newNumber;
  }
  return innerCacheFunction;
}
const runner2 = cacheFunction(); // var number = 10 * 10이라는 매우 오래 걸리는 연산은 여기서 딱 한 번 수행한다.
console.log(runner2(10)); // 그리고 여기선 가벼운 연산인 innerCacheFunction()만 수행하면 된다.
console.log(runner2(20));
console.log(runner2(30));

function cacheFunction2() {
  var number = 99;
  function increment() {
    number++;
    return number;
  }
  return increment;
}
const runner3 = cacheFunction2();
console.log(runner3()); // 100
console.log(runner3()); // 101
// ㄴ cacheFunction2는 이미 콜 스택에서 제거되었고 increment만 남았는데, incremnet는 number 값을 기억하고 있다.
console.log(runner3()); // 102
console.log(runner3()); // 103
console.log(runner3()); // 104
console.log(runner3()); // 105
console.log(runner3()); // 106

/**
 * 예제 3. 정보 은닉
 */
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const hee = new Idol("은희", 2002);
console.log(hee.sayNameAndYear());
console.log(hee.name);
console.log(hee._year); // undefined
