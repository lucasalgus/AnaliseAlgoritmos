export function iterativeMultiplication(f1: number, f2: number) {
	let result = 0;

	for (let i = 0; i < f2; i++) {
		result += f1;
	}

	return result;
}

export function recursizeMultiplication(f1: number, f2: number, i = 0) {
	if (i === f1) {
		return 0;
	}

	return f2 + recursizeMultiplication(f1, f2, i + 1);
}