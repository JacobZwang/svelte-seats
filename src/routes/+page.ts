export const load: import('./index').Load = async ({ fetch }) => {
	return {
		taken: await fetch('/taken.json').then((res) => res.json())
	};
};
