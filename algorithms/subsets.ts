export function getAllSubsets(set: number[]) {
	const subset = new Array(set.length);
	getAllSubsetsAux(set, subset, 0);
};

function getAllSubsetsAux(set: number[], subset: number[], i: number) {
	if (i === set.length) {
		return;
	}

	getAllSubsetsAux(set, subset, i + 1);
	subset[i] = set[i];
	getAllSubsetsAux(set, subset, i + 1);
}