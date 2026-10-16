/**
 * Using function to create objects
 *
 * 생성자 함수에서 사용하지 말아야 할 몇 가지
 */

// 생성자 함수
function IdolModel(name, year) {
  console.log(this); // 아래의 new 키워드로 인스턴스를 생성했으므로 this가 IdolModel {}으로 출력될 것이고, 함수 호출 형식 이후에는 global에 붙어서 this가 출력된다.
  console.log(new.target); // new 키워드를 사용하면 [Function: IdolModel]이 출력되고, 함수 호출 형식을 사용하면 undefined가 출력된다.

  // new.target이 undefined일 때, 즉 new 키워드를 사용하지 않았을 때 if문으로 인스턴스를 대신 생성해줄 수 있음 -> 안전고리 역할
  if (!new.target) {
    return new IdolModel(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이(가) 춤을 춥니다.`;
  };

  // return {} // 하면 안 됨
}

const idol = new IdolModel("은희", 2002);
console.log(idol);
console.log(idol.dance());

const idol2 = IdolModel("은희", 2002);

console.log(idol2); // undefined

// new 키워드를 사용하지 않고 함수 호출 방식을 이용해 버리면 값들이 global에 붙는다.
console.log(global.name);

/**
 * 화살표 함수로는 생성자 함수를 정의할 수 없다.
 */

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;

  this.dance = () => {
    return `${this.name}이(가) 춤을 춥니다.`;
  };
};

const idolArrow = new IdolModelArrow("종환", 1998);
console.log(idolArrow);
