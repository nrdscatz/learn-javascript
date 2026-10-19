/**
 * Async theory
 */
function longWork() {
  const now = new Date();

  /**
   * milliseconds since epoch
   * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환한다.
   */

  const milliseconds = now.getTime();
  const afterTwoSeconds = milliseconds + 2 * 1000;

  while (new Date().getTime() < afterTwoSeconds) {}

  console.log("완료");
}

// console.log("Hello");
// longWork();
// console.log("World");

// OUTPUT:
// Hello
// 완료
// World

// while 루프를 실행하는 동안 다음 코드를 실행하지 못하고 있음 -> 동기 프로그래밍으로 실행되기 때문
// Thread: |console.log('Hello')| longWork() 2초 console.log('완료') |console.log('World')|

function longWork() {
  setTimeout(() => {
    console.log("완료");
  }, 2000);
}
console.log("Hello");
longWork();
console.log("World");

// OUTPUT:
// Hello
// World
// 완료

// Thread: |console.log('Hello')|longWork()|console.log('World')|        2초        |console.log('완료')

/**
 * Event Loop
 *
 * JS Engine -> Memory Heap, Call Stack
 *
 * 1. function1 호출, function 2호출
 * CallStack:
 * | function2 | -> 비동기 함수?
 * | function1 |
 * |-----------|
 *
 * 비동기 함수가 실행되면 Task Queue/Event Queue에 옮겨진다.
 *
 * CallStack:
 * | function1 |
 * |-----------|
 *
 * Task Queue/Event Queue:
 * | function2 | -> 2초간 대기
 * |-----------|
 *
 * 2. function3 호출
 * CallStack:
 * | function3 |
 * | function1 |
 * |-----------|
 * function3 실행, function1 실행:
 * |           |
 * |-----------|
 *
 * 지금부터 Event Loop의 행동에 주목!!
 * - 계속해서 Event Queue를 바라보면서 실행이 종료된 함수가 있는지 확인한다.
 *   그리고 Call Stack이 비어있는지도 확인한다.
 * - Event Queue에 있는 함수가 종료가 됐을 때, Call Stack이 비어있다면
 *   Event Loop가 종료된 함수를 Call Stack으로 옮긴다.
 * - 이후, 비동기 작업이 끝났으니 동기로 실행해야 할 작업이 실행되고 Call Stack이 비워진다.
 */
