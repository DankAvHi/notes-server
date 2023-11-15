import { Note as NotePrisma } from "@prisma/client";

export class Note implements NotePrisma {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string | null;
    content: string;
}
