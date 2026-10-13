/**
 * Hoisting
 */
console.log("hello");
console.log("world");

console.log("--------");

console.log(name); // undefined
var name = "은희";
console.log(name); // '은희'

var name2;
console.log(name2);
name2 = "은희";
console.log(name2);

/**
 * 호이스팅은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * 호이스팅은 var, let, const 어떤 키워드를 사용해도 발생한다. var만 undefined로 초기화되는 것
 */

console.log(eunHee); // 에러 발생
let eunHee = "은희";
