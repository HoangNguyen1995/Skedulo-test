import { unionOverLappingItems } from "../helper";

const testCase1 = [
  { startPx: 10, endPx: 30 },
  { startPx: 20, endPx: 40 },
  { startPx: 35, endPx: 50 },
  { startPx: 55, endPx: 65 },
  { startPx: 60, endPx: 70 },
];
const testCase2 = [
  { startPx: 4, endPx: 9 },
  { startPx: 2, endPx: 5 },
  { startPx: 12, endPx: 17 },
  { startPx: 1, endPx: 8 },
  { startPx: 10, endPx: 15 },
];

test("union over lapping 1", () => {
  expect(unionOverLappingItems(testCase1)).toEqual([
    { startPx: 10, endPx: 50 },
    { startPx: 55, endPx: 70 },
  ]);
});

test("union over lapping 2", () => {
  expect(unionOverLappingItems(testCase2)).toEqual([
    { startPx: 1, endPx: 9 },
    { startPx: 10, endPx: 17 },
  ]);
});
