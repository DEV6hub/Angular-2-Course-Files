import {Component, OnInit} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
@Component({
	selector: "cat-list",
	template: require("./cat-list.component.html")
})
export class CatListComponent implements OnInit {
	favouriteCat: Cat;
	cats: Cat[] = [];
	sub: Subscription;
	
	constructor(private catService: CatService, private router: Router) {
		
	}
	
	ngOnInit (): any {
		this.sub = this.catService.getCatList().subscribe((cat) => {
			this.cats.push(cat);
		});
		
		this.favouriteCat = this.catService.favouriteCat;
	}
	
	ngOnDestroy(): any {
		if ( this.sub ) {
			this.sub.unsubscribe();
		}
	}
	
	selectCat(cat: Cat): any {
		this.router.navigate(["cats", cat.id]);
	}
	
	addCat(): any {
		this.router.navigate(["cats", "new"])
	}
}