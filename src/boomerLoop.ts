export function boomerLoop(arr: any[]) {
  let iterations = 0;
  const start = performance.now();
  for (let i = 0; i < arr.length; i++) {
    iterations++;
  }
  const end = performance.now();
  return {
    time: end - start,
    iterations,
  };
}
