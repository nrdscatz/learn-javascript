/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 *
 * *****
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */
const testFunction = function () {
  return this;
};

console.log(testFunction()); // <ref *1> Object [global] {...}
console.log(testFunction() === global); // true

const hee = {
  name: "은희",
  year: 2002,
  sayHello: function () {
    // 여기서의 this는 '현재 객체'를 의미한다.
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};

console.log(hee.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    // 여기서의 this는 new 키워드로 생성된 객체를 가리킴
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}
const hee2 = new Person("은희", 2002);
console.log(hee.sayHello());

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }

  return dance2();
};
console.log(hee2.dance()); // 'undefined이 춤을 춥니다.'가 출력됨

/**
 * this 키워드가 어떤 걸 가리키냐는 세가지만 기억하면 된다.
 *
 * 1. 일반 함수 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2. 메서드로 호출할 땐 호출된 객체를 가리킨다.
 * 3. new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

/**
 * 1. apply()
 * 2. call()
 * 3. bind()
 */
function returnName() {
  return this.name;
}
console.log(returnName()); // undefined -> global에 매핑

const hee3 = {
  name: "은희",
};

console.log(returnName.call(hee3)); // returnName()을 hee3에 바인딩해서 콜하겠다. -> "은희"
console.log(returnName.apply(hee3)); // returnName()을 hee3에 바인딩해서 콜하겠다. -> "은희"

/**
 * 1. call -> 콤마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2. apply -> 아규먼트를 리스트로 입력해야 한다.
 */
function multiply(x, y, z) {
  return `${this.name} / 결과값: ${x * y * z}`;
}
console.log(multiply.call(hee3, 3, 4, 5)); // multiply를 hee3에 바인딩하고, x에3, y에4, z에5가 인자로 전달된다.
console.log(multiply.apply(hee3, [3, 4, 5])); // multiply를 hee3에 바인딩하고, x에3, y에4, z에5가 인자로 전달된다.

/**
 * bind()
 *
 * 바인딩만 해두고 나중에 실행할 수 있다.
 */
const laterFunc = multiply.bind(hee3, 3, 4, 5);
console.log(laterFunc); // [Function: bound multiply]
console.log(laterFunc());
