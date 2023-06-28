import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-first-project'; //типізована змінна
  //a: number = 10;
  //isTrue: boolean = false;
  //user2: undefined = undefined;
  //user3: null = null;
  //user = {name: "Ann", age: "30"};

  //obj = {city: "Kyiv", lat: 4499857, lon: 94903856};
  //numbers: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9,  "Ann"];
  //users: {name: string, age: number}[] = [{name: "Ann", age: 30}, {name: "John", age: 27}, {name: "Katrin", age: 33} ]

  //counter: number = 0;

  //iterate() {
  //  this.users.forEach((user) => {
  //    user.name.slice()
  //  })
  //}

  //increment() {
  // this.counter = this.counter + 10;
  //}

  //decrement() {
  // this.counter = this.counter - 10;
  //}

  //reset() {
  //  this.counter = 0;
  //}

  //main(a: number, b:number, c: number, d: number) {
  //  return a + b;
  //}

  //main2(nums: number[]) { //типізування масивів, див вище- покращення коду вище, 2 способи
  //  return nums.reduce((acc, n) => acc += n, 0);
  //}

  //main3(nums: Array<number>) {
  //  return nums.reduce((acc, n) => acc += n, 0);//2й варіант
  //}

   //main4(nums: Array<number | string>) {   //символ | або
  //  return nums.reduce((acc, n) => acc += n, 0);//2й варіант
  //}
}
