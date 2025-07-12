import { Person } from './persons/Person';

export class Contract {
    constructor(
        public contractId: string,
        public person: Person,
        public startDate: Date,
        public endDate: Date,
        public salary: number
    ) {}
}