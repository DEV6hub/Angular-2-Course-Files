import {Injectable} from "@angular/core";
import {Cat} from "./cat";
@Injectable()
export class CatService {
	boots: Cat = new Cat("Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Cat = new Cat("Mittens", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Cat = new Cat("Fuzzy", "Tabby", "Rotund", new Date(2014, 10, 10));
	
	private cats: Cat[] = [this.boots, this.mittens, this.fuzzy];
	
	favouriteCat: Cat;
	
	getCatList(): Cat[] {
		return this.cats;
	}
}
