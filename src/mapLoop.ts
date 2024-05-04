export function mapLoop(arr: any[]) {
  let iterations = 0;
  const start = performance.now();
  arr.map(() => {
    iterations++;
  });
  const end = performance.now();
  return {
    time: end - start,
    iterations,
  };
}
