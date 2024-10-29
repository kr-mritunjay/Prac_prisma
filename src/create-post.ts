import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  await Prisma.post.create({
    data: {
      title: "Hello World",
      content: "asasaasa",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main();
