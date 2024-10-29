import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  const query = await Prisma.users.findMany({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });
  console.log(query);
}

main();
