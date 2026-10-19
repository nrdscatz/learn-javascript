/**
 * Async / Await
 *
 * Promise를 .then().catch()를 사용하는 것 말고도
 * async await를 사용해서 더 간편하게 사용할 수 있다.
 */
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("완료");
      reject("에러");
    }, seconds * 1000);
  });

async function runner() {
  try {
    const res = await getPromise(1);
    console.log(res);
    const res2 = await getPromise(2);
    console.log(res2);
    const res3 = await getPromise(3);
    console.log(res3);
  } catch (e) {
    console.log("---catch e---");
    console.log(e);
  } finally {
    console.log("---finally---");
  }
}

runner();
