import { Elysia } from "elysia";

interface IUser {
  name: string;
  email: string;
}

const users: IUser[] = []

const app = new Elysia().group('/user', user => {
  return user
  .post('/create', ({ body, set }) => {
    set.status = 200
    users.push(body as IUser)
    return body
  })
  .get('/all', ({ set }) => {
    set.status = 200
    return users
  })
}).listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);