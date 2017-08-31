import reducer from './todo';

describe('TODO Reducer', () => {
	test("returns a state object", () => {
		const result = reducer(undefined,{type: 'ANYTHING'})
		expect(result).toBeDefined();
	})
});