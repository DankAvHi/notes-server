import { Controller, Get, Redirect } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Redirect("http://localhost:80", 302)
    webRedirect() {
        return { url: this.appService.webRedirect() };
    }
}
