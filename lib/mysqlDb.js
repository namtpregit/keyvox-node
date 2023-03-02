export class MysqlCommon {
    constructor(db, obj, arr) {
        this.db = db;
        this.obj = obj;
        this.arr = arr;
    }

    async Connect(db) {
        const mysqlClient = require('mysql')
        const connection = mysqlClient.createConnection(db)

        await connection.connect();
        return connection;
    }

    One(obj) {
        if(!obj) {
            return null;
        }
        const key_value = Object.entries(obj);
        const newObj = key_value.map(k => {
            if (k[0] == "_id") {
                k[0] = "id";
            }
            return k;
        })
        return Object.fromEntries(newObj);
    }

    Many(arr) {
        if (!arr) {
            return [];
        }
        const newArr = arr.map(el => this.One(el));
        return newArr;
    }

    ToMongo(obj) {
        if  (!obj) {
            return null;
        }
        const key_value = Object.entries(obj);
        const newObj = key_value.map(k => {
            if (k[0] == "id") {
                k[0] = "_id";
            }
            return k;
        })
        return Object.fromEntries(newObj);
    }
}
