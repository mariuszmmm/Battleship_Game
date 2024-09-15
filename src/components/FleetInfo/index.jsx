import {Item, List} from "./styled.jsx";

export const FleetInfo = ({fleet}) => {
	const info = {
		size5: "pięciomasztowce",
		size4: "czteromasztowce",
		size3: "trzymasztowce",
		size2: "dwumasztowce",
		size1: "jednomasztowce",
	};

	const shipSizes = Object.entries(fleet)

	return (
		<List>
			{shipSizes.map((size) =>
				<Item key={size[0]}>{<span>{info[size[0]]}:</span>}{<span>{size[1].length}</span>}</Item>
			)}
		</List>
	)
};