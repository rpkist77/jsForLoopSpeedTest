export function forOfLoop(arr: any[]) {
  let iterations = 0;
  const start = performance.now();
  for (const item of arr) {
    iterations++;
  }
  const end = performance.now();
  return {
    time: end - start,
    iterations,
  };
}
