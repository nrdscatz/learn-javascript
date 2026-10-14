/**
 * Loops
 *
 * 1) for
 * 2) while
 */

// for (;;) {} // 무한루프

// i는 0으로 선언, i가 10이 될 때까지, i를 증가 시킨다.
for (let i = 0; i < 10; i++) {
  console.log(i); // 0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n
}

console.log("----------------------------------------");

for (let i = 10; i > 0; i--) {
  console.log(i); // 10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n
}

console.log("----------------------------------------");

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

console.log("----------------------------------------");

// output:
// 0, 3\n0, 2\n0, 1\n
// 1, 3\n1, 2\n1, 1\n
// 2, 3\n2, 2\n2, 1\n

/* *을 이용해서 6x6의 정사각형을 출력해라 */

// 방법 1
let square = "";
const side = 6;

for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
    if (j < side - 1) {
      square += " ";
    }
  }
  square += "\n";
}

console.log(square);

console.log("----------------------------------------");

// 방법 2
for (let i = 0; i < 6; i++) {
  let row = ""; // i가 행이 된다. (i가 초기화될 때마다 row 변수도 공백 문자열로 초기화)
  for (let j = 0; j < 6; j++) {
    row += "*"; // j는 열이 된다.
    if (j < 5) {
      // 공백을 넣고 싶은데, 행의 마지막 열 뒤에는 포함하지 않는 방법
      row += " ";
    }
  }
  console.log(row); // 첫 번째 행부터 출력
}

/**
 * for...in
 *
 * object, array에서 사용 가능
 * 루프가 돌 때마다 key 값을 받을 수 있는 것
 */
const hee = {
  name: "은희",
  year: 2002,
  boyfriend: "종환",
};

for (let key in hee) {
  console.log(key);
}

console.log("----------------------------------------");

for (let key in hee) {
  console.log(hee[key]); // 객체의 특성을 이용해서 value를 가져옴
}

console.log("----------------------------------------");

const loveMemberArray = ["은희", "종환"];

for (let key in loveMemberArray) {
  console.log(key); // 배열을 사용할 경우 Index 값을 가져옴
}

console.log("----------------------------------------");

for (let key in loveMemberArray) {
  console.log(`${key}: ${loveMemberArray[key]}`); // 배열을 사용할 경우 Index 값을 가져옴
}

console.log("----------------------------------------");

/**
 * for...of
 *
 * array에서 사용할 수 있다.
 */
for (let value of loveMemberArray) {
  console.log(value); // array에서 값을 가져오고 싶을 땐 for...of를 사용하면 된다.
}

/**
 * while
 */

let number = 0;

while (number < 10) {
  console.log(number);
  // 조건이 false가 될 때까지 실행
  number++; // 조건이 false가 되게끔 하는 코드
}

console.log(number);

console.log("----------------------------------------");

/**
 * do-while
 */

number = 0;

do /* 조건을 보기 전에 먼저 실행됨 | 적어도 한 번 이상은 무조건 실행됨 */ {
  number++;
  console.log(number);
} while (number < 10);

console.log(number);

console.log("----------------------------------------");

/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // i가 5일 때, loop을 벗어난다.
  console.log(i);
}

console.log("----------------------------------------");

number = 0;

while (number < 10) {
  if (number === 5) break; // loop을 벗어난다.
  number++;
  console.log(number);
}

console.log("----------------------------------------");

/**
 * continue
 */

for (let i = 0; i < 10; i++) {
  if (i === 5) continue; // 건너뜀
  console.log(i);
}

console.log("----------------------------------------");

number = 0;

while (number < 10) {
  number++;
  if (number === 5) continue;
  console.log(number);
}
