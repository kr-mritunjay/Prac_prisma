import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  await Prisma.post.createMany({
    data: [
      {
        title: "Hellokinkn World",
        content: "asasaasa",
        authorId: 1,
      },
      {
        title: "hello",
        content: "fdewefef",
        authorId: 4,
      },

      {
        title: "hiojhb",
        content: "hjhbhjhb",
        authorId: 3,
      },
    ],
  });
}

main();
