import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true

})
export class DateAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) 
            return 'Juste maintenant';
        const intervals: { [key: string]: number } = {
            'année': 31536000,
            'mois': 2592000,
            'semaine': 604800,
            'jour': 86400,
            'heure': 3600,
            'minute': 60,
            'seconde': 1
        };
        let counter;
        for (const i in intervals) {
            counter = Math.floor(seconds / intervals[i]);
            if (counter > 0)
                if (counter === 1) {
                    return 'Avant ' + counter + ' ' + i; 
                } else {
                    return 'Avant ' +  counter + ' ' + ( i !== 'mois' ? i : 'moi') + 's';
                }
        }
    }
    return value;
}

}
