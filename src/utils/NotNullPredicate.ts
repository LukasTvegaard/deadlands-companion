function notNullish<T>(input: T | null | undefined): input is NonNullable<T> {
	return input !== null && input !== undefined;
}

/**
 * This is a helper function for dealing with type inference related to TypeScripts strict null-checking when working with lists and predicates.
 *
 * When given a list of nullable elements and filtering it to be a list of non nullable elements, TS's type inference needs assistance. Intuitively, when calling:
 * const result = list.filter(item => item !== null)
 * you would expect the type inference to identify that result can no longer be null, and calling result.property should be a legal operation.
 * Unfortunately, this will produce a type error, stating that "result might be null". The reason for this is that the filter operation does not expose the checks it has made outside of its own context.
 *
 * By wrapping your predicate in this function, the required information is emitted for TS to understand that your filtered list no longer contains nullable elements.
 *
 *
 * Since the notNullish operation is applied before the predicate, the predicate also understands that the input is not nullable when it reaches the predicate.
 *
 * @param predicate optional custom predicate function to apply to the input. If no predicate is supplied, the returned callback simply evaluates if the input is nullish.
 * @returns A callback function which first checks if value is nullish and then passes the value on to predicate evaluation if it is not.
 *
 * It is important to note that when this function is used in a filter-operation, the returned callback should replace the entire filter function callback, not be called from a lambda.
 * WRONG usage:
 * list.filter(item => notNullishAndPredicate(item.property && item.otherProperty))
 *
 * CORRECT usage:
 * list.filter(notNullishAndPredicate(item => item.property && item.otherProperty))
 */
export function notNullishAndPredicate<T>(
	predicate?: (input: NonNullable<T>) => boolean
): (input: T) => input is NonNullable<T> {
	if (predicate) {
		return (input): input is NonNullable<T> => notNullish(input) && predicate(input);
	}

	return (input): input is NonNullable<T> => notNullish(input);
}
