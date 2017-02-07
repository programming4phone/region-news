import { Pipe, PipeTransform } from '@angular/core';

const ONE_DAY: number = 1000*60*60*24;
const ONE_HOUR: number = 1000*60*60;
const ONE_MINUTE: number = 1000*60;
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
	transform(valueDateMs: number): string {
  
		let timeAgo: string;
		let rightNowDate: Date = new Date();
		let rightNowDateMs: number = rightNowDate.getTime();
		
		let differenceMs: number = rightNowDateMs - valueDateMs;
		
		let minutesAgo:number = Math.round(differenceMs/ONE_MINUTE);
		if(minutesAgo <= 60){
			timeAgo = minutesAgo==1?`1 minute ago`:`${minutesAgo} minutes ago`;
		}
		else{
			let hoursAgo:number = Math.round(differenceMs/ONE_HOUR);
			if(hoursAgo <= 24){
				timeAgo = hoursAgo==1?`1 hour ago`:`${hoursAgo} hours ago`;
			}
			else{
				let daysAgo: number =  Math.round(differenceMs/ONE_DAY);
				timeAgo = daysAgo==1?`1 day ago`:`${daysAgo} days ago`;
			}
		}

		return timeAgo;
 	}
}