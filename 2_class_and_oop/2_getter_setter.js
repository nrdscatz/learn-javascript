/**
 * Getter Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // 데이터를 가공해서 새로운 데이터를 보여줌
  // private한 값을 반환함
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set name(name) {
    // this.name은 IdolModel의 필드임
    this.name = name;
  }
}

const hee = new IdolModel("은희", 2002);
console.log(hee);

console.log(hee.nameAndYear); // getter는 함수가 아니다.

hee.name = "민주";
console.log(hee);

class IdolModel2 {
  #name; // private 값 -> 외부에서 접근하지 못함
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  // getter를 사용하면 private 값을 가져올 수 있다.
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const hee2 = new IdolModel2("은희", 2002);
console.log(hee2); // #name이 보이지 않음
console.log(hee2.name);

console.log("---------------------------------");

hee2.name = "민주";
console.log(hee2);
console.log(hee2.name);
