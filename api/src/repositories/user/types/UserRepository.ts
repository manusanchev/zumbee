import User from "@src/models/User";

export default interface UserRepository {
    create(user: User): Promise<void>
    findByEmail(email: string): Promise<User | undefined>
    findByUsername(username: string): Promise<User | undefined>
    findByUsernameOrEmail(username: string): Promise<User | undefined>
}