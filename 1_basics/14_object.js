/**
 * Object
 */
let hee = {
  name: "은희",
  group: "쫑희",
  dance: function () {
    // 여기서 this는 이 함수가 정의되어 있는 객체 hee를 가리킨다.
    return `${this.name}가 춤을 춥니다.`;
  },
};
console.log(hee); // { name: '은희', group: '쫑희', dance: [Function: dance] }
console.log(hee.name);
console.log(hee["name"]);

const key = "name";
console.log(hee[key]);

console.log(hee.dance()); // 함수이므로 괄호를 입력해야 함

const nameKey = "name";
const nameValue = "은희";

const groupKey = "group";
const groupValue = "쫑희";

const hee2 = {
  // 변수를 key로 사용하려면 []를 사용해서 그 안에 변수를 넣어야 한다.
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}가 춤을 춥니다.`;
  },
};
console.log(hee2);
console.log(hee2.dance());

hee2["group"] = "희쫑";
console.log(hee2);

// 존재하지 않는 키를 넣으면 키와 값이 추가된다.
hee2["englishName"] = "Hee Eun";
console.log(hee2);

// 삭제는 delete로
delete hee2["englishName"];
console.log(hee2);

/**
 * 객체의 특징
 *
 * 1. const로 선언할 경우, 객체 자체를 변경할 수는 없다
 * 2. 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

/**
 * 모든 키 값 가져오기
 */
console.log(Object.keys(hee2));

/**
 * 모든 벨류값 가져오기
 */
console.log(Object.values(hee2));

const name = "은희";

const hee3 = {
  name,
};
console.log(hee3);
