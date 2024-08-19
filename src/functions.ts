export function _isUndefined(value: unknown): boolean {
	return value === undefined;
}

export function _isNull(value: unknown): boolean {
	return value === null;
}

export function _isEmpty(value: unknown): boolean {
	if (_isNull(value) || _isUndefined(value)) return true;

	if (typeof value === 'string' || Array.isArray(value)) {
		return value.length === 0;
	}

	if (typeof value === 'object' && value !== null) {
		return Object.keys(value).length === 0;
	}

	return false;
}

export function _isNaN(value: unknown): boolean {
	return Number.isNaN(value as number);
}

export function _isNumber(value: unknown): boolean {
	return typeof value === 'number' && !Number.isNaN(value);
}

export function _toNumber(value: unknown): number | undefined {
	if (_isNull(value) || _isUndefined(value) || _isNaN(value)) return undefined;

	const parsedNumber = Number(value);
	return _isNumber(parsedNumber) ? parsedNumber : undefined;
}

export function _isFinite(value: number | null): boolean {
	if (value === null || _isUndefined(value) || _isNull(value) || _isNaN(value)) return false;

	return Number.isFinite(value);
}

export function _indexOfArray(array: unknown[], value: unknown): number {
	for (let i = 0; i < array.length; i++) {
		const item = array[i];

		if (typeof item === 'object' && item !== null) {
			for (const key in item) {
				if (Object.prototype.hasOwnProperty.call(item, key)) {
					if ((item as Record<string, unknown>)[key] === value) {
						return i;
					}
				}
			}
		}
	}

	return -1;
}
