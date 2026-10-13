/**
 * Data Types
 *
 * 여섯 개의 Primitive Type과 한 개의 Object 타입이 있다.
 *
 * 1) number
 * 2) string
 * 3) boolean
 * 4) undefined
 * 5) null
 * 6) symbol
 *
 * 7) Object(객체)
 *    Function
 *    Array
 *    Object
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age); // typeof를 사용하면 변수의 타입을 출력할 수 있다.
console.log(tempature);
console.log(pi);

// ...

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = "1";
const test2 = "1";

console.log(test1 === test2); // true

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 *
 * Map
 * key:value 쌍으로 이뤄져 있다.
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary); // object

/**
 * Array 타입
 *
 * 값을 리스트로 나열할 수 있는 타입이다.
 * Index를 활용해서 값을 가져오거나 변경할 수 있다.
 */
const illitMembersList = ["민주", "원희", "모카"];

console.log(illitMembersList);
console.log(illitMembersList[0]);
console.log(illitMembersList[1]);
console.log(illitMembersList[2]);

console.log(typeof illitMembersList); // object
