import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
	name: "catYears"
})
export class CatYearsPipe implements PipeTransform {
	transform(value: string): number {
		let diff = Math.floor(moment().diff(moment(value), "years", true));
		
		if ( diff <= 2 ) {
			return Math.round(diff * 12.5);
		} else {
			return 25 + ((diff - 2) * 4);
		}
	}
}