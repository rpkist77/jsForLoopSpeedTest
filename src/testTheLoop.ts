export function testTheLoop(
  loopFn: (arr: number[]) => { time: number; iterations: number },
  iterations: number,
  length: number
) {
  const results: { time: number; iterations: number }[] = [];
  for (let i = 0; i < iterations; i++) {
    //generate a number[] filled with random numbers and of length 'length'
    const arr = Array.from({ length }, () => Math.random());
    results.push(loopFn(arr));
  }
  return results.reduce((acc, curr) => acc + curr.time, 0);
}
