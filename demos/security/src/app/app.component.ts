import { Component } from '@angular/core';

@Component({
	selector: "dev6-app",
	template: require("./app.component.html")
})
export class AppComponent {
	htmlSnippet: string = `Testing a <script>alert("tag")</script> <b>tag</b>`;
}
