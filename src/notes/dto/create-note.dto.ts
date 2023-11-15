import { Prisma } from "@prisma/client";

export class CreateNoteDto implements Prisma.NoteCreateInput {
    createdAt?: string | Date | undefined;
    updatedAt?: string | Date | undefined;
    title?: string | null | undefined;
    content: string;
}
