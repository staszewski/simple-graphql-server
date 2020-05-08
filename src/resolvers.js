import { users } from "./db";

const resolvers = {
    Query: {
        user: (parent, args) => {
            return users.find(user => user.id === Number(args.id));
        },
        users: () => {
            return users;
        }
    }
};

export default resolvers;
