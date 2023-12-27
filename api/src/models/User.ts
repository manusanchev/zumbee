export default class User {
    constructor(
        public id: string,
        public username: string,
        public password: string,
        public email: string,
        public createdAt: Date,
        public emailConfirmed: boolean = false
    ) {}
}
