export class Employee {
    constructor(
        public id: number,
        public name: string,
        public dateOfBirth: Date,
        public alias?: string, // optional
        public jobCategory?: string, // optional. Eg: technology, social, sciences, doctor
    ) { }
}
