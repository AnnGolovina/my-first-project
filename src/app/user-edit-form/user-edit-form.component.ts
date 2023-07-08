import { Component, Input } from '@angular/core';
import { UserInterface } from 'src/types';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent {
  @Input() user: UserInterface | null = null;
  //@Input() editFilds: string[] = [];
  //@Input() editFilds: (keyof UserInterface)[] = [];
  @Input() editFilds: Array<keyof Omit<UserInterface, |"address" | "geo" | "company" | "id">> = [];


  constructor(public usersService: UsersService) {

  }

  onInput(event: Event) {
    const input = event.target! as HTMLInputElement;
    const inputName = input.name as keyof UserInterface;

    //@ts-ignore
    this.user![inputName] = input.value as never;
    console.log("USER", this.user);
    console.log("Users", this.usersService.users);
  }

  fieldsString() {
    this.editFilds.filter((key) => typeof key === "string");   
  }

}


