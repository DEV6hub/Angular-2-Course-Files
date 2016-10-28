import {Injectable} from "@angular/core";
import {Pet} from "./pet";
@Injectable()
export class PetService {
	boots: Pet = new Pet(1, "Boots", "cat", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Pet = new Pet(2, "Mittens", "cat", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Pet = new Pet(3, "Fuzzy", "cat", "Tabby", "Rotund", new Date(2014, 10, 10));
	
	spot: Pet = new Pet(4, "Spot", "dog", "Dalmation", "faithful pet", new Date(2008, 4, 9));
	rover: Pet = new Pet(5, "Rover", "dog", "Basset Hound", "droopy ears", new Date(2004, 5, 30));
	yips: Pet = new Pet(6, "Yips", "dog", "Chihuahua", "lives in a purse", new Date(2014, 8, 14));
	
	private pets: Pet[] = [this.boots, this.mittens, this.fuzzy, this.spot, this.rover, this.yips];
	
	favouritePet: Pet;
	
	getPetList(type?: "cat" | "dog"): Pet[] {
		if ( type ) {
			return this.pets.filter(pet => pet.type === type);
		} else {
			return this.pets;
		}
	}
	
	getPet(id: number): Pet {
		return this.pets.find(pet => pet.id === id);
	}
}
