import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "../app.component";

@Component({
	selector: "app-news-item",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./news-item.component.html",
	styleUrl: "./news-item.component.css",
})
export class NewsItemComponent {
	data = [
		{
			articles: [
				{
					id: 0,
					title: "Hydrogen VS Electric Cars",
					body: "Will hydrogen-fueled cars ever catch up to EVs?",
				},
				{
					id: 1,
					title: "The Downsides of AI Artistry",
					body: "What are the possible adverse effects of on-demand AI image generation?",
				},
				{
					id: 2,
					title: "Is VC Funding Drying Up?",
					body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
				},
			],
			posts: [
				{
					id: 0,
					title: "Reviving Retro PCs",
					body: "What happens when old PCs are given modern upgrades?",
				},
				{
					id: 1,
					title: "Top 10 Laptops of 2022",
					body: "Our best picks for various needs and budgets.",
				},
				{
					id: 2,
					title: "The Growth of Gaming",
					body: "How the pandemic has sparked fresh opportunities.",
				},
			],
		},
	];
}
