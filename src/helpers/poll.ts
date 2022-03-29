const oneMinute = 1 * 60 * 1000;
const fiveSeconds = 5 * 1000;

export default function poll<R>(
  fn: () => R,
  interval: number = fiveSeconds,
  timeout: number = oneMinute
): Promise<R> {
  const endTime = Number(new Date()) + timeout;

  const checkCondition = async function (
    resolve: (value: R) => void,
    reject: (value: R | Error) => void
  ) {
    // If the condition is met, we're done!
    const result = await fn();
    if (result) {
      resolve(result);
    }
    // If the condition isn't met but the timeout hasn't elapsed, go again
    else if (Number(new Date()) < endTime) {
      setTimeout(checkCondition, interval, resolve, reject);
    }
    // Didn't match and too much time, reject!
    else {
      reject(new Error("timed out for " + fn));
    }
  };

  return new Promise(checkCondition);
}
