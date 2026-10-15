const line = () => {
  console.log("---------------------------------------------------------");
};

/**
 * Array Functions
 */

let illitMembers = ["민주", "윤아", "원희", "모카", "이로하"];

console.log(illitMembers);

// push()
illitMembers.push("은희"); // 마지막 인덱스에 "은희" 추가
console.log(illitMembers.push("은희")); // 값이 추가된 이후의 배열 길이 반환
console.log(illitMembers); // 배열을 직접적으로 변경(추가)

// pop()
console.log(illitMembers.pop()); // 마지막 인덱스의 값을 반환
console.log(illitMembers); // 배열을 직접적으로 변경(삭제)

// shift()
console.log(illitMembers.shift()); // 첫 번째 인덱스의 값을 반환
console.log(illitMembers); // 배열을 직접적으로 변경(삭제)

// unshift() -> push()와 동일, 맨 앞인지 맨 뒤인지만 다름
console.log(illitMembers.unshift("민주")); // 값이 추가된 이후의 배열 길이 반환
console.log(illitMembers); // 배열을 직접적으로 변경(추가)

// splice()
console.log(illitMembers.splice(0, 3)); // 0번째 인덱스부터 3개 삭제하고 인덱스 0,1,2의 값 반환
console.log(illitMembers);

line();

illitMembers = ["민주", "윤아", "원희", "모카", "이로하"];

// concat()
console.log(illitMembers.concat("은희")); // 맨 뒤에 값을 추가하고 '새로 만들어진' 배열 반환
console.log(illitMembers); // 원본은 변동 X

// slice()
console.log(illitMembers.slice(0, 3)); // 0번째 인덱스부터 3-1 인덱스까지
console.log(illitMembers); // 원본은 변동 X

line();

// spread operator
let illitMembers2 = [...illitMembers];
console.log(illitMembers2);

let illitMembers3 = [illitMembers];
console.log(illitMembers3);

line();

let illitMembers4 = illitMembers; // 주소를 복사

console.log(illitMembers4);
console.log(illitMembers4 == illitMembers);
console.log(illitMembers4 === illitMembers);

// console.log([...illitMembers] === illitMembers); // false -> spread operator는 새로운 배열을 만드는 것이기 때문이다.

// join
console.log(illitMembers.join()); // 콤마 기준으로 string으로 연결됨
console.log(illitMembers.join("/"));
console.log(illitMembers.join(", "));

// sort()
// 오름차순
illitMembers.sort(); // 반환값 없음
console.log(illitMembers); // 원본 배열 변경됨
// 내림차순
console.log(illitMembers.reverse()); // 정렬된 배열 반환
console.log(illitMembers); // 원본 배열 변경

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => {
  return a > b ? -1 : 1;
});
console.log(numbers);

// map() -> 모든 값을 순회함
console.log(illitMembers.map((x) => x));
console.log(illitMembers.map((x) => `아일릿: ${x}`));

console.log(
  illitMembers.map((x) => {
    if (x === "원희") {
      return `아일릿: ${x}`;
    } else {
      return x;
    }
  }),
);
console.log(illitMembers); // 원본 배열은 변경 X

// filter()
numbers = [1, 8, 7, 6, 4];

console.log(numbers.filter((x) => x % 2 === 0));

// find() -> 해당되는 첫 번째 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() -> find와 똑같은데, 인덱스를 반환함
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() -> reduce((previous, next) => {}, initialValue)
// p는 처음에 0으로 세팅된다. 이후부터 반환된 값이 p가 된다. 즉, 콜백함수가 p + n을 반환하므로 numbers의 요소 값을 모두 더한 26이 반환
console.log(numbers.reduce((p, n) => p + n, 0));
