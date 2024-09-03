import {rotateShip} from "./rotateShip.jsx";

export const moveWarning = ({ship, placesOtherShips}) => {
	let warning = {
		top: false,
		down: false,
		left: false,
		right: false,
		rotate: false,
	};

	if (ship.some((item) => item.place.row <= 1 ||
		placesOtherShips.some((places) => (places.row === item.place.row - 1) && (places.col === item.place.col))
	)) {
		warning = {...warning, top: true}
	}

	if (ship.some((item) => item.place.row >= 10 ||
		placesOtherShips.some((places) => (places.row === item.place.row + 1) && (places.col === item.place.col))
	)) {
		warning = {...warning, down: true}
	}

	if (ship.some((item) => item.place.col <= 1 ||
		placesOtherShips.some((places) => (places.row === item.place.row) && (places.col === item.place.col - 1))
	)) {
		warning = {...warning, left: true}
	}

	if (ship.some((item) => item.place.col >= 10 ||
		placesOtherShips.some((places) => (places.row === item.place.row) && (places.col === item.place.col + 1))
	)) {
		warning = {...warning, right: true}
	}

	const coordinateShip = () => {
		return ship.map((item) => {
			return {x: item.place.col, y: item.place.row}
		})
	};
	const coordinateRotatedShip = rotateShip(coordinateShip());
	const collision = placesOtherShips.some((placeOtherShip) => (
		coordinateRotatedShip.some((item) => (
			placeOtherShip.row === item.y && placeOtherShip.col === item.x
		))
	))
	const isOnBorder = (coordinateRotatedShip.some((item) =>
		item.y > 10 || item.y < 1 ||
		item.x > 10 || item.x < 1));

	if (collision || isOnBorder) {
		warning = {...warning, rotate: true}
	}

	return warning;
};