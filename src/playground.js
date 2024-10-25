"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./server/db");
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
await db_1.db.user.create({
    data: {
        firstName: 'John',
        lastName: 'Doe',
        emailAddress: 'john@example.com'
    }
});
