export const fetcher = async path => {
	const response = await fetch("https://swapi.dev/api/" + path);
	if (response.status === 200) {
		const data = await response.json();

		return data;
	}

	return null;
};
