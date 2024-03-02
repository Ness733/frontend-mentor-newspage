import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NewsItemComponent } from "./news-item/news-item.component";

import { CommonModule } from "@angular/common";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, NewsItemComponent, CommonModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "frontend-challenge-newspage";
	posts = [
		{
			id: 0,
			title: "Reviving Retro PCs",
			body: "What happens when old PCs are given modern upgrades?",
			image: "../assets/images/image-retro-pcs.jpg",
		},
		{
			id: 1,
			title: "Top 10 Laptops of 2022",
			body: "Our best picks for various needs and budgets.",
			image: "../assets/images/image-top-laptops.jpg",
		},
		{
			id: 2,
			title: "The Growth of Gaming",
			body: "How the pandemic has sparked fresh opportunities.",
			image: "../assets/images/image-gaming-growth.jpg",
		},
	];
}
