import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'letter';
  randomText = faker.lorem.sentence();
  enteredText: string = ''
  getInputValue(value:string) {
    console.log(value)
    this.enteredText=value
  }
  compare(randomLetter:string,enteredLetter:string) {
    if (!enteredLetter) {
      return 'pending'
    }
    return randomLetter===enteredLetter?'correct':'incorrect'
    
  }
}
