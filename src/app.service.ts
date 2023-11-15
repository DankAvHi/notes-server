import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    webRedirect(): string {
        return "http://localhost:80";
    }
}
