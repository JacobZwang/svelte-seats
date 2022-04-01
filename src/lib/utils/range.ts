interface SeatPosition {
	x: number;
	y: number;
}

export default function range(x1: number, x2: number, y1: number, y2: number): SeatPosition[] {
	const arr: SeatPosition[] = [];

	for (let y = y1; y <= y2; y++) {
		for (let x = x1; x <= x2; x++) {
			arr.push({
				x: x,
				y: y
			});
		}
	}

	return arr;
}
