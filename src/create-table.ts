import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  // writing queries here.....
  await Prisma.users.createMany({
    data: [
      {
        email: "mritunjaykr10@gmail.com",
        name: "mritunjay",
      },
      {
        email: "ashwanikr160@gmail.com",
        name: "ashwani",
      },
      {
        email: "ankitkumar@gmail.com",
        name: "ankit",
      },
      {
        email: "ayushkumar@gmail.com",
        name: "ayush",
      },
    ],
  });
}

// calling and disconnecting the client
main();
