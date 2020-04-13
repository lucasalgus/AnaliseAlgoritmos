import { performance } from "perf_hooks";

import { recursizeMultiplication, iterativeMultiplication } from "./algorithms/multiplication";
import { sequentialSearch, binarySearch } from './algorithms/search';
import { getAllSubsets } from './algorithms/subsets';

// Função para medir o tempo das outras funções
function measureTime(callback: Function, testDescription: string): void {
	const t0 = performance.now();
	callback();
	const t1 = performance.now();

	console.log(`[${testDescription}] Tempo gasto: ${t1 - t0}`);
}

/*
 * Testes:
 */
export function firstTest() {
	console.log("Cenário I");
	const firstTestValues = [
		{f1: 3, f2: 100},
		{f1: 3, f2: 1_000},
		{f1: 3, f2: 10_000},
		{f1: 3, f2: 100_000},
		{f1: 3, f2: 1_000_000},
	];
	
	console.log("A)");
	firstTestValues.forEach(({f1, f2}) => {
		measureTime(iterativeMultiplication.bind(null, f1, f2), `Valores: ${f1}, ${f2}`);
	});
	console.log("B)");
	firstTestValues.forEach(({f1, f2}) => {
		measureTime(recursizeMultiplication.bind(null, f1, f2), `Valores: ${f1}, ${f2}`);
	});
}

export function secondTest() {
	console.log("Cenário II");
	const secondTestArray = Array.from(Array(20_000_001).keys()).splice(1, 20_000_000);
	const secondTestValues = [
		1_000,
		10_000,
		100_000,
		1_000_000,
		10_000_000,
		21_000_000,
	];
	
	console.log("A)");
	secondTestValues.forEach((value) => {
		measureTime(sequentialSearch.bind(null, secondTestArray, value), `Valor: ${value}`);
	});
	console.log("B)");
	secondTestValues.forEach((value) => {
		measureTime(binarySearch.bind(null, secondTestArray, value), `Valor: ${value}`);
	});
}

export function thirdTest() {
	console.log("Cenário III");
	const thirdTestArray = [2, 4, 8, 16, 25];
	measureTime(getAllSubsets.bind(null, thirdTestArray), `Conjunto: ${thirdTestArray}`)
}
