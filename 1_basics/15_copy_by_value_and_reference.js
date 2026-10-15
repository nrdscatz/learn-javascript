/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1. 기본적으로 모든 primitive 값은 copy by value이다.
 * 2. 객체는 copy by reference이다.
 */
let originalObj = {
  name: "은희",
  group: "쫑희",
};

let copyObj = originalObj; // 참조를 복사

console.log(originalObj);
console.log(copyObj);

originalObj["group"] = "희쫑";
console.log(originalObj);
console.log(copyObj);

console.log(originalObj === copyObj);
