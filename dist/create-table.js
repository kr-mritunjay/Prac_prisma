"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // writing queries here.....
        yield Prisma.users.createMany({
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
    });
}
// calling and disconnecting the client
main();
