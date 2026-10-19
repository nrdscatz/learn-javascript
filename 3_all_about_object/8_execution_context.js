/**
 * Execution Context
 *
 * Execution Context는 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고 있는 특수한 환경이다.
 * 코드 실행에 필요한 모든 데이터를 들고 있는 환경이라고 생각하면 된다.
 *
 * Execution Context는 크게 두 가지 타입으로 나뉘어진다.
 * 1. Global Context: 최상위 Execution Context이다. 코드를 실행하면 무조건 생성되는 context로
 *    웹에서의 window 객체나 nodejs에서의 global 객체를 생성하고 들고있는다.
 * 2. Function Context: 함수가 실행될 때마다 함수별로 실행되는 context이다.
 *    함수 실행에 대한 모든 정보를 갖고 있는다.
 *
 * -> 실행을 하게 되면 기본적으로 Global Context가 생성되고, 함수가 실행될 때마다 Function Context가 생성된다.
 */

/**
 * Memory Heap & Call Stack
 *
 * 싱글 스레드에서 Memory Heap 하나와 Call Stack 하나를 들고있다.
 *
 * Memory Heap
 *
 * Call Stack(Execution Context Stack)
 */

// Execution Context Stack
function one() {
  console.log("run one");
  console.log("run one finished");
}
function two() {
  console.log("run two");
  one();
  console.log("run two finished");
}
function three() {
  console.log("run three");
  two();
  console.log("run three finished");
}
three();

// OUTPUT:
// run three
// run two
// run one
// run one finished
// run two finished
// run three finished

/**
 * Call Stack(Execution Context Stack)
 *
 * 1. 가장 먼저, global context 생성, 쌓임
 * 2. three() 함수 쌓임
 * 3. two() 함수 쌓임
 * 4. one() 함수 쌓임
 *
 * -> 콜 스택의 형태는 다음과 같음
 *
 * | function one()   |
 * | function two()   |
 * | function three() |
 * | global           |
 *
 * -> 그리고 다음과 같이 실행됨
 *
 * 1.
 * | function one()   | -> 실행, pop
 * | function two()   |
 * | function three() |
 * | global           |
 *
 *
 * 2.
 * | function two()   | -> 실행, pop
 * | function three() |
 * | global           |
 *
 *
 * 3.
 * | function three() | -> 실행, pop
 * | global           |
 *
 *
 * 4.
 * | global           | -> 모든 실행이 종료되면서 global도 사라짐
 *
 *
 * end.
 * | 빈 스택            |
 *
 */

/**
 * Execution Context Stack
 *
 * Creation Phase
 * - Global Object를 생성한다. window 또는 global 객체가 생성되고 함수에서는
 *   arguments 객체가 생성된다.
 * - this를 window 또는 global에 바인딩한다.
 * - 변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다.
 *
 * Execution Phase
 * - 코드를 실행한다.
 * - 필요하다면 새로운 Execution Context를 생성한다. -> 함수를 실행할 때마다 새로운 Execution Context가 생성됨
 */
