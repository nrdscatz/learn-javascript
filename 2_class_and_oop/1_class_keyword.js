/**
 * Class Keyword
 *
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메서드를 정의하는 일종의 틀이다.
 */
class IdolModel {
  //   name;
  //   year;

  constructor(name, year) {
    // 여기서의 this는 현재 인스턴스를 가리킨다.
    this.name = name;
    this.year = year;
  }

  // 클래스 메서드
  sayName() {
    // this는 이 메서드를 실행한 인스턴스(객체)를 가리킨다.
    return `안녕하세요, 저는 ${this.name}입니다.`;
  }
}

// constructor - 생성자

const hee = new IdolModel("은희", 2002);
console.log(hee); // IdolModel { name: '은희', year: 2002 }
const jongHwan = new IdolModel("종환", 1998);
console.log(jongHwan); // IdolModel { name: '종환', year: 1998 }
const minJu = new IdolModel("민주", 2000);
console.log(minJu);
const wonHee = new IdolModel("원희", 2005);
console.log(wonHee);

// ㄴ 한 번 정의한 클래스로 무한히 찍어낼 수 있음

// 객체처럼 쓸 수 있다.
console.log(hee.name);
console.log(hee["year"]);

console.log(typeof IdolModel); // 클래스는 함수이다.
console.log(typeof hee); // 클래스로 생성한 인스턴스는 객체이다.
