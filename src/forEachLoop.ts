export function forEachLoop(arr: any[]) {
  let iterations = 0;
  const start = performance.now();
  arr.forEach(() => {
    iterations++;
  });
  const end = performance.now();
  return {
    time: end - start,
    iterations,
  };
}
