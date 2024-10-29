import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  // writing queries here.....
  await Prisma.users.create({
    data: {
      email: "mritunjaykr160@gmail.com",
      name: "mritunjay",
    },
  });
}

// calling and disconnecting the client
main();
