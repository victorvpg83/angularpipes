import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all: boolean = false): string {

    value = value.toLowerCase()
    let names = value.split(' ')

    console.log(names)

    if ( all ) {
      names = names.map(name => {
        return name[0].toUpperCase() + name.substr(1)
      })
    } else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1)
    }
    return names.join(' ')
  }

}
