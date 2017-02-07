import { Pipe, PipeTransform } from '@angular/core';

const ONE_DAY: number = 1000*60*60*24;
const ONE_HOUR: number = 1000*60*60;

/*
 * Display article datetime in terms of hours/days ago.
 * Usage:
 *   value | timeAgo
 * Example:
 *   {{ articleDate |  timeAgo }}
 *   formats to: 6 hours ago
*/
@Pipe({name: 'timeAgo'})
export class TimeAgoPipe implements PipeTransform {
	transform(value: Date): string {
  
		let timeAgo: string;
		let rightNow: Date = new Date();
		let valueDateMs: number = value.getTime();
		let rightNowDateMs: number = rightNow.getTime();
		
		let differenceMs: number = rightNowDateMs - valueDateMs;
		let hoursAgo:number = Math.round(differenceMs/ONE_HOUR);
		if(hoursAgo <= 24){
			timeAgo = `${hoursAgo} hours ago`;
		}
		else{
			let daysAgo: number =  Math.round(differenceMs/ONE_DAY);
			timeAgo = `${daysAgo} days ago`;
		}
		
		return timeAgo;
 	}
}