/**
 * Static Keyword
 */
// class IdolModel {
//   name;
//   year;
//   // groupName; -> 인스턴스별로 groupName이 존재
//   static groupName = "쫑희"; // -> 클래스에 귀속
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   static returnGroupName() {
//     return "쫑희";
//   }
// }

// const hee = new IdolModel("은희", 2002);
// console.log(hee); // IdolModel { name: '은희', year: 2002 } | groupName은 객체에 존재하지 않음

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  // Object로부터 이 클래스의 인스턴스를 만들겠다.
  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

// const hee2 = new IdolModel("은희", 2002);

const hee2 = IdolModel.fromObject({ name: "은희", year: 2002 });
console.log(hee2);

const minJu = IdolModel.fromList(["민주", 2003]);
console.log(minJu);
