import { toEntries, toMap } from "../src/maps";

const identity = (x: number) => x;
const double = (x: number) => x * 2;
const triple = (x: number) => x * 3;

const nums = [1, 2, 3, 4];
const numsDouble = [2, 4, 6, 8];
const numsTriple = [3, 6, 9, 12];

describe("toEntries", function() {
	const extractKey = <T, U>([key]: [T, U]) => key;
	const extractValue = <T, U>([, value]: [T, U]) => value;

	describe("array input", function() {
		it("produces entries with the same length", () => {
			const result = toEntries(identity, identity, nums);
			const resultArray = Array.from(result);

			expect(resultArray).toHaveLength(nums.length);
		});

		it("transforms keys according to mapping function", () => {
			const result       = toEntries(identity, identity, nums);
			const resultDouble = toEntries(double, identity, nums);
			const resultTriple = toEntries(triple, identity, nums);

			const resultKeysArray       = Array.from(result)      .map(extractKey);
			const resultKeysDoubleArray = Array.from(resultDouble).map(extractKey);
			const resultKeysTripleArray = Array.from(resultTriple).map(extractKey);

			expect(resultKeysArray)      .toEqual(nums);
			expect(resultKeysDoubleArray).toEqual(numsDouble);
			expect(resultKeysTripleArray).toEqual(numsTriple);
		});

		it("transforms values according to mapping function", () => {
			const result 	   = toEntries(identity, identity, nums);
			const resultDouble = toEntries(identity, double, nums);
			const resultTriple = toEntries(identity, triple, nums);

			const resultValuesArray       = Array.from(result)      .map(extractValue);
			const resultValuesDoubleArray = Array.from(resultDouble).map(extractValue);
			const resultValuesTripleArray = Array.from(resultTriple).map(extractValue);

			expect(resultValuesArray)      .toEqual(nums);
			expect(resultValuesDoubleArray).toEqual(numsDouble);
			expect(resultValuesTripleArray).toEqual(numsTriple);
		});

		it("produces expected output", function() {
			const result = toEntries(double, triple, nums);

			const resultArray = Array.from(result);

			expect(resultArray).toEqual([[2, 3], [4, 6], [6, 9], [8, 12]]);
		});
	});

	describe("iterable input", function() {
		const getIterator = () => nums[Symbol.iterator]();

		it("produces entries with the same length", () => {
			const result = toEntries(identity, identity, getIterator());
			const resultArray = Array.from(result);

			expect(resultArray).toHaveLength(4);
		});

		it("transforms keys according to mapping function2", () => {
			const result       = toEntries(identity, identity, getIterator());
			const resultDouble = toEntries(double, identity, getIterator());
			const resultTriple = toEntries(triple, identity, getIterator());

			const resultKeysArray       = Array.from(result)      .map(extractKey);
			const resultKeysDoubleArray = Array.from(resultDouble).map(extractKey);
			const resultKeysTripleArray = Array.from(resultTriple).map(extractKey);

			expect(resultKeysArray)      .toEqual(nums);
			expect(resultKeysDoubleArray).toEqual(numsDouble);
			expect(resultKeysTripleArray).toEqual(numsTriple);
		});

		it("transforms values according to mapping function", () => {
			const result 	   = toEntries(identity, identity, getIterator());
			const resultDouble = toEntries(identity, double, getIterator());
			const resultTriple = toEntries(identity, triple, getIterator());

			const resultValuesArray       = Array.from(result)      .map(extractValue);
			const resultValuesDoubleArray = Array.from(resultDouble).map(extractValue);
			const resultValuesTripleArray = Array.from(resultTriple).map(extractValue);

			expect(resultValuesArray)      .toEqual(nums);
			expect(resultValuesDoubleArray).toEqual(numsDouble);
			expect(resultValuesTripleArray).toEqual(numsTriple);
		});

		it("produces expected output", function() {
			const result = toEntries(double, triple, nums);

			const resultArray = Array.from(result);

			expect(resultArray).toEqual([[2, 3], [4, 6], [6, 9], [8, 12]]);
		});
	});
});

describe("toMap", function() {
	describe("array input", function() {
		it("produces map with the same size", () => {
			const result = toMap(identity, identity, nums);

			expect(result.size).toBe(nums.length);
		});

		it("transforms keys according to mapping function", () => {
			const result       = toMap(identity, identity, nums);
			const resultDouble = toMap(double, identity, nums);
			const resultTriple = toMap(triple, identity, nums);

			const resultKeysArray       = Array.from(result.keys());
			const resultKeysDoubleArray = Array.from(resultDouble.keys());
			const resultKeysTripleArray = Array.from(resultTriple.keys());

			expect(resultKeysArray)      .toEqual(nums);
			expect(resultKeysDoubleArray).toEqual(numsDouble);
			expect(resultKeysTripleArray).toEqual(numsTriple);
		});

		it("transforms values according to mapping function", () => {
			const result 	   = toMap(identity, identity, nums);
			const resultDouble = toMap(identity, double, nums);
			const resultTriple = toMap(identity, triple, nums);

			const resultValuesArray       = Array.from(result.values());
			const resultValuesDoubleArray = Array.from(resultDouble.values());
			const resultValuesTripleArray = Array.from(resultTriple.values());

			expect(resultValuesArray)      .toEqual(nums);
			expect(resultValuesDoubleArray).toEqual(numsDouble);
			expect(resultValuesTripleArray).toEqual(numsTriple);
		});

		it("produces expected output", function() {
			const result = toMap(double, triple, nums);

			const resultObject = Object.fromEntries(result);

			expect(resultObject).toEqual({2: 3, 4: 6, 6: 9, 8: 12});
		});
	});

	describe("iterable input", function() {
		const getIterator = () => nums[Symbol.iterator]();

		it("produces entries with the same length", () => {
			const result = toMap(identity, identity, getIterator());
			const resultArray = Array.from(result);

			expect(resultArray).toHaveLength(4);
		});

		it("transforms keys according to mapping function2", () => {
			const result       = toMap(identity, identity, getIterator());
			const resultDouble = toMap(double, identity, getIterator());
			const resultTriple = toMap(triple, identity, getIterator());

			const resultKeysArray       = Array.from(result.keys());
			const resultKeysDoubleArray = Array.from(resultDouble.keys());
			const resultKeysTripleArray = Array.from(resultTriple.keys());

			expect(resultKeysArray)      .toEqual(nums);
			expect(resultKeysDoubleArray).toEqual(numsDouble);
			expect(resultKeysTripleArray).toEqual(numsTriple);
		});

		it("transforms values according to mapping function", () => {
			const result 	   = toMap(identity, identity, getIterator());
			const resultDouble = toMap(identity, double, getIterator());
			const resultTriple = toMap(identity, triple, getIterator());

			const resultValuesArray       = Array.from(result.values());
			const resultValuesDoubleArray = Array.from(resultDouble.values());
			const resultValuesTripleArray = Array.from(resultTriple.values());

			expect(resultValuesArray)      .toEqual(nums);
			expect(resultValuesDoubleArray).toEqual(numsDouble);
			expect(resultValuesTripleArray).toEqual(numsTriple);
		});

		it("produces expected output", function() {
			const result = toMap(double, triple, nums);

			const resultObject = Object.fromEntries(result);

			expect(resultObject).toEqual({2: 3, 4: 6, 6: 9, 8: 12});
		});
	});
});
