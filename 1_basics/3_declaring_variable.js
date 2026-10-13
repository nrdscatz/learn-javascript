/**
 * Variable 선언하기
 *
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = "은희";
console.log(name); // `console.log()` 함수에 변수를 전달해 출력할 수 있다.

var age = 32;
console.log(age); // 숫자를 전달해도 출력할 수 있다.

let illit = "아일릿";
console.log(illit);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

illit = "민주";
console.log(illit);

const newJeans = "뉴진스";
console.log(newJeans);

// newJeans = "은희"; // 실행시 에러 발생 -> 상수 변수의 값은 변경할 수 없다.
console.log(newJeans);
