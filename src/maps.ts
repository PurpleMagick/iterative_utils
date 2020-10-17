type Mapping<T, U> = (x: T) => U;

export function* toEntries<T, Key, Value>(keyMapper: Mapping<T, Key>, valueMapper: Mapping<T, Value>, data: Iterable<T>): Generator<[Key, Value]> {
	for (const item of data) {
		yield [keyMapper(item), valueMapper(item)];
	}
}

export function toMap<T, Key, Value>(keyMapper: Mapping<T, Key>, valueMapper: Mapping<T, Value>, data: Iterable<T>) {
	return new Map(toEntries(keyMapper, valueMapper, data));
}