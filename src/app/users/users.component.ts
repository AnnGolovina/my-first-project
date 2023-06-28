import { Component } from '@angular/core';
import { UserInterface } from 'src/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  searchValue: string = "";
  searchResult: Array<UserInterface> = [];

  //users: {name: string, age: number, obj: {a: number}}[] = [{name: "Ann", age: 30, obj: {a: 7}}]; //приклад типізації
  users: UserInterface[] = [
    {
      name: 'Ann',
      age: 30,
      locations: [
        { lat: 8747474, lon: 84736354, title: 'Kyiv' },
        { lat: 8747474, lon: 84736354, title: 'Poltava' },
      ],
    },
    {
      name: 'John',
      age: 32,
      locations: [{ lat: 1247474, lon: 99736354, title: 'Vinnitsa' }],
    },
    {
      name: 'Mary',
      age: 27,
      locations: [{ lat: 4547474, lon: 12736354, title: 'Lviv' }],
    },
  ];

  onInput(event: any) {

    this.searchValue = event.target.value;

    this.searchResult = this.users.filter((user) => {
     const word = event.target.value.toLowerCase();

     if (user.name.toLowerCase().includes(word)) {
      return true;
    }

    if (user.locations) {
      for (const location of user.locations) {
        if (location.title.toLowerCase().includes(word)) {
          return true;
        }}
     }
     return false
    });
  
    console.log('Input', event.target.value, this.searchResult);
  }
}
