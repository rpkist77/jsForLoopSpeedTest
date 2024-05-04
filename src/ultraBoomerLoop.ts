export function ultraBoomerLoop(arr: any[]) {
  let iterations = 0;
  const start = performance.now();
  let i = arr.length;
  while (i--) {
    iterations++;
  }
  const end = performance.now();
  return {
    time: end - start,
    iterations,
  };
}
