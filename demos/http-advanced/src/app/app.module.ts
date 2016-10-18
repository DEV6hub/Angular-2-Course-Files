import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {PeopleService} from "./people.service";
import {PeopleListComponent} from "./people-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, RequestOptions} from "@angular/http";
import {CustomRequestOptions} from "./custom-request-options";
import {HttpWrapper} from "./http-wrapper.service";

@NgModule({
	imports: [BrowserModule, HttpModule],
	declarations: [AppComponent, PeopleListComponent],
	providers: [
		PeopleService,
		HttpWrapper,
		{ provide: RequestOptions, useClass: CustomRequestOptions }
		],
	bootstrap: [AppComponent]
})

export class AppModule {}
