export default class User {
    constructor(
        public id: string,
        public username: string,
        public password: string,
        public email: string,
        public created_at: Date,
        public updated_at: Date,
        public email_confirmed: boolean = false
    ) {}
}
