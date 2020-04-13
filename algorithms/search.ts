export function sequentialSearch(array: number[], value: number) {
	for (const el of array) {
		if (el === value) {
			return el;
		}
	}

	return null;
}

export function binarySearch(
	array: number[],
	value: number,
	start = 0,
	end = array.length - 1
) {
	const middle = Math.floor((start + end) / 2);

	if (value === array[middle]) {
		return array[middle];
	}

	if (start >= end) {
		return null;
	}

	return value < array[middle]
		? binarySearch(array, value, start, middle - 1)
		: binarySearch(array, value, middle + 1, end);
}
