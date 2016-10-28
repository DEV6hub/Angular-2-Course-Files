export class Pet {
	constructor(
		public id: number,
		public name: string,
		public type: "cat" | "dog",
		public breed: string,
		public description: string,
		public birthday: Date
	) {}
}