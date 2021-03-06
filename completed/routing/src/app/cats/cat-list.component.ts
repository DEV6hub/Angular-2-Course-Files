import {Component, OnInit} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {Router} from "@angular/router";
@Component({
	selector: "cat-list",
	template: require("./cat-list.component.html")
})
export class CatListComponent implements OnInit {
	favouriteCat: Cat;
	cats: Cat[];
	
	constructor(private catService: CatService, private router: Router) {
		
	}
	
	ngOnInit (): any {
		this.cats = this.catService.getCatList();
		this.favouriteCat = this.catService.favouriteCat;
	}
	
	selectCat(cat: Cat): any {
		this.router.navigate(["cats", cat.id]);
	}
}