/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티이다.
// 클래스의 상속에서 부모 클래스에 해당되는 값이다.
// 이게 되는 이유는 클래스도 결국 인스턴스화가 되기 때문이다.
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
  this.name;
  this.year;
}

console.log(IdolModel.prototype); // static 값, 빈 객체처럼 보이지만 감춰져 있어서 안 보임
console.dir(IdolModel.prototype, {
  showHidden: true, // 감춰진 값을 보이도록 설정하는 설정
});

// OUTPUT:
// <ref *1> {
//   [constructor]: [Function: IdolModel] {
//     [length]: 2,
//     [name]: 'IdolModel',
//     [prototype]: [Circular *1]
//   }
// }

// 아래 코드의 결과(현상)를 circular reference라고 한다.
console.log(IdolModel.prototype["constructor"] === IdolModel); // true
console.log(
  IdolModel.prototype["constructor"]["prototype"] === IdolModel.prototype,
); // true

const hee = new IdolModel("은희", 2002);
console.log(hee.__proto__); // {}
console.log(hee.__proto__ === IdolModel.prototype); // true
console.log(testObj.__proto__ === Object.prototype); // true

// hee: name, year, __proto__
// IdolModel.prototype: constructor, __proto__
// * hee의 __proto__는 IdolModel.prototype과 같다. -> hee.__proto__ === IdolModel.prototype
// IdolModel.prototype의 constructor는 IdolModel 함수를 가리킨다.

console.log("-------------------------------------------------");

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return `${this.name}이(가) 인사를 합니다.`;
  };
}

const hee2 = new IdolModel2("은희", 2002);
const jong2 = new IdolModel2("종환", 1998);
console.log(hee2.sayHello());
console.log(jong2.sayHello());
console.log(hee2.sayHello === jong2.sayHello); // false -> 똑같은 기능을 중복으로 저장하기 때문에 메모리 낭비 문제가 있다.

// hasOwnProperty: 상속을 받은 프로퍼티인지, 고유한 프로퍼티인지 확인할 수 있는 기능
console.log(hee2.hasOwnProperty("sayHello")); // true -> hee2만의 고유 프로퍼티라는 뜻

// sayHello 프로퍼티가 hee2와 jong2와 공유되도록 할 수 있다.
function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel3.prototype.sayHello = function () {
  return `${this.name}이(가) 인사를 합니다.`;
};

console.log(IdolModel3.prototype); // { sayHello: [Function (anonymous)] }

const hee3 = new IdolModel3("은희", 2002);
const jong3 = new IdolModel3("종환", 1998);
console.log(hee3.sayHello());
console.log(jong3.sayHello());
console.log(hee3.sayHello === jong3.sayHello); // true -> hee3와 jong3은 sayHello를 공유함

console.log(hee3.hasOwnProperty("sayHello")); // false -> sayHello는 hee3의 고유한 프로퍼티가 아니다.

// static 메서드를 생성하는 방법은? 객체처럼 추가하는 것이다.
IdolModel3.sayStaticMethod = function () {
  return `안녕하세요 저는 static method입니다.`;
};
console.log(IdolModel3.sayStaticMethod());

// Overriding
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  // 프로퍼티 셰도잉 - class에서 override와 똑같다.
  // 프로토타입 메서드를 상속받던 걸 sayHello라는 메서드를 따로 정의해 오버라이딩한다.
  this.sayHello = function () {
    return `안녕하세요 저는 인스턴스 메서드입니다.`;
  };
}
IdolModel4.prototype.sayHello = function () {
  return `안녕하세요 저는 프로토타입 메서드입니다.`;
};
const hee4 = new IdolModel4("은희", 2002);
console.log(hee4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return `${this.name}이(가) 인사를 합니다.`;
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이(가) 춤을 춥니다.`;
  };
}

const heee = new IdolModel("은희", 2002);
const joong = new FemaleIdolModel("종환", 1998);

console.log(heee.__proto__); // 인스턴스 heee의 __proto__는 IdolModel 생성자 함수의 prototype을 가리키므로 결과는 { sayHello: [Function (anonymous)] }가 출력된다.
console.log(joong.__proto__ === IdolModel.prototype);

// getPrototypeOf() 함수는 heee의 __proto__를 가져옴
console.log(Object.getPrototypeOf(heee) === IdolModel.prototype);

console.log(heee.sayHello());
console.log(joong.dance());
// console.log(joong.sayHello()); // 호출할 수 없음

// FemaleIdolModel이 IdolModel을 상속받게 하고싶다면? setPrototypeOf를 사용하면 된다.
console.log("-------------변경전-------------");
console.log(Object.getPrototypeOf(joong) === FemaleIdolModel.prototype); // true
console.log(Object.getPrototypeOf(joong) === IdolModel.prototype); // false

Object.setPrototypeOf(joong, IdolModel.prototype); // 인스턴스 joong의 __proto__를 IdolModel의 prototype으로 설정한다(원래는 FemaleIdolModel의 prototype임).

console.log("-------------변경후-------------");
console.log(Object.getPrototypeOf(joong) === FemaleIdolModel.prototype); // false
console.log(Object.getPrototypeOf(joong) === IdolModel.prototype); // true

console.log(joong.sayHello());
console.log(joong.dance());

console.log(joong.constructor === FemaleIdolModel);
console.log(joong.constructor === IdolModel);
console.log(heee.constructor === IdolModel);
// ㄴ setPrototypeOf로 변경하면 기존의 상속 관계가 완전히 끊긴다는 것을 알 수 있다.

console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false
// ㄴ FemaleIdolModel에는 아무런 변화도 없다. 즉, 위에서 말한 것처럼 joong과의 연결만 끊긴 것이다.

// 함수의 prototype을 변경 -> 인스턴스의 __proto__를 변경하는 것과는 완전히 다르다는 걸 기억하자.
FemaleIdolModel.prototype = IdolModel.prototype;

const heee2 = new FemaleIdolModel("은희", 2002);
console.log(Object.getPrototypeOf(heee2) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
