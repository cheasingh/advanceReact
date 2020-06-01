// resolver is use to run graphql syntax in javascript
const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return item;
  },
  updateItem(parent, args, ctx, info) {
    //take a copy of update
    const updates = { ...args };
    //remove id from the update
    delete updates.id;
    //run the update method
    //this expose data from local to prisma db prisma.graphql
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      //info is what to return
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    //1. find item
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    // 2. check if they own that item, or have the permission
    // TODO
    // 3. delete it!
    return ctx.db.mutation.deleteItem({ where }, info);
  },
};

module.exports = Mutations;
