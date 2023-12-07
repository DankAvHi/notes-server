import { Note as NotePrisma } from "@prisma/client";

export class Note implements NotePrisma {
    id: number;
    createdAt: Date;
    updatedAt: Date | null;
    title: string | null;
    content: string;
    pinned: boolean;
    deleted: boolean;
    attachments: string[];
}
