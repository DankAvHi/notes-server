import { Note as NotePrisma } from "@prisma/client";

export class Note implements Partial<NotePrisma> {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title?: string | null;
    content: string;
}
