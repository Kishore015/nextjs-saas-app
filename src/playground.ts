import { db } from "./server/db";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
await db.user.create({
    data:{
        firstName: 'John',
        lastName: 'Doe',
        emailAddress: 'john@example.com'
    }
})
console.log("done")