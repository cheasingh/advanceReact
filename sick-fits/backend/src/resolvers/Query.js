// database call place here
// resolver is use to run graphql syntax in javascript
// ctx here is from createServer context

const { forwardTo } = require("prisma-binding");
const Query = {
  // if the query is the same from yogoa to prisma, just forward the request to prisma.
  //   no authentication require
  items: forwardTo("db"),
  item: forwardTo("db"),
  // async items(parent, args, ctx, info) {
  //     const items = await ctx.db.query.items()
  //     return items
  // }
};

module.exports = Query;
