import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name            = 'Víctor Palacios'
  name2           = 'víCtOr paLaCioS'
  arr: number[]   = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  PI: number      = Math.PI
  percent         = 0.234
  money           = 1234.5
  date: Date      = new Date()
  language        = 'es'
  active          = true
  videoURL        = 'https://www.youtube.com/embed/Ie2Dg6zlC2s'
  valuePromise    = new Promise<string>((res) => {
    setTimeout(() => {
      res('Llegó la promesa')
    }, 4500);
  })
  user            = {
    name: 'Víctor',
    surname: 'Palacios',
    birthdate: 37,
    direction: {
      street: 'Fake',
      number: 3
    }
  }
}
