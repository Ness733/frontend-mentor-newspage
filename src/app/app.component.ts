import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NewsItemComponent } from "./news-item/news-item.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, NewsItemComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "frontend-challenge-newspage";
}
