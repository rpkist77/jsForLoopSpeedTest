import { forEachLoop } from "./forEachLoop";
import { boomerLoop } from "./boomerLoop";
import { ultraBoomerLoop } from "./ultraBoomerLoop";
import { forOfLoop } from "./forOfLoop";
import { mapLoop } from "./mapLoop";
import { testTheLoop } from "./testTheLoop";

//Here we compare all of the possible ways of iterating through the array and check the avg time taken by each of them.
export function fakeNews() {
  //get iterations from argv
  const iterations = parseInt(process.argv[2]) || 1000;
  const length = parseInt(process.argv[3]) || 1000;

  //test the forEach loop
  const forEachTime = testTheLoop(forEachLoop, iterations, length);
  console.log("forEach loop time: ", forEachTime);

  //test the for loop
  const forLoopTime = testTheLoop(boomerLoop, iterations, length);
  console.log("for loop (boomerLoop) time: ", forLoopTime);

  //test the while loop
  const whileLoopTime = testTheLoop(ultraBoomerLoop, iterations, length);
  console.log("while loop (ultraBoomerLoop) time: ", whileLoopTime);

  //test the for of loop
  const forOfLoopTime = testTheLoop(forOfLoop, iterations, length);
  console.log("for of loop time: ", forOfLoopTime);

  //test the map loop
  const mapLoopTime = testTheLoop(mapLoop, iterations, length);
  console.log("map loop time: ", mapLoopTime);
}
