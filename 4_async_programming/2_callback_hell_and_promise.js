/**
 * Callback
 */
function waitAndRun() {
  setTimeout(() => {
    console.log("끝");
  }, 2000);
}
// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log("1번 콜백 끝");
    setTimeout(() => {
      console.log("2번 콜백 끝");
      setTimeout(() => {
        console.log("3번 콜백 끝");
      }, 2000);
    }, 2000);
  }, 2000);
}
// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("완료");
  }, 2000);
});

// timeoutPromise.then((res) => {
//   console.log("---then---");
//   console.log(res);
// });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("완료");
      // reject("에러");
    }, seconds * 1000);
  });

// getPromise(1)
//   .then((res) => {
//     console.log("---first then---");
//     console.log(res);
//     return getPromise(3);
//   })
//   .catch((res) => {
//     console.log("---first catch---");
//     console.log(res);
//   })
//   .finally(() => {
//     console.log("---finally---");
//   });

// all은 static method겠죠?
// 3개의 promise를 모두 한 번에 실행함 -> 가장 느린 함수 기준으로 then이 불림
Promise.all([getPromise(1), getPromise(4), getPromise(1)]).then((res) => {
  console.log(res);
});
