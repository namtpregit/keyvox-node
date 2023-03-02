
export class UserServiceBase  {
    constructor(UserMysql) {
        this.UserMysql = UserMysql;
    }

    async listUser() {
        const doc = await this.UserMysql.listUser();
        return doc;
    }
}
