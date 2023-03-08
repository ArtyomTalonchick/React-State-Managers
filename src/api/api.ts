import ky from "ky";

export interface ApiOptionsType {
	delay: number;
	throwError: boolean;
}

const getApi = (options: ApiOptionsType) => ky.create({
    prefixUrl: "https://jsonplaceholder.typicode.com",
    hooks: {
		beforeRequest: [
			async () => await new Promise((resolve) => setTimeout(resolve, options.delay)),
			async () => {
				if (options.throwError) {
					throw new Error("Some error");
				}
			}
		],
	},
});

export default getApi;