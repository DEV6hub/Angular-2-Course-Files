import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
	name: "catYears"
})
export class CatYearsPipe implements PipeTransform {
	transform(value: string): number {
		return Math.floor(moment().diff(moment(value), "years", true) * 7);
	}
}