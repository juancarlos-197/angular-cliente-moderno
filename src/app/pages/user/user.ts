import { UserService } from './../../services/user/user.services';
import { Component, inject } from '@angular/core';
import { Users } from '../../interfaces/users';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-user',
  imports: [MatTableModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
//Api Rest endpoint
  public user: Users[] = [];
  public error: string | null = null;
   
  // Inyección de mascotaSerice usando la función inject
  readonly userService=inject(UserService); 


  displayedColumns: string[] = ['id','first_name', 'last_name', 'email'];
  dataSource : Users[] = [];
  constructor() {}
  
  ngOnInit() {
    /**Api Rest endpoint para consumir */
        // Ahora puedes usar mascotaSerice aquí
    this.userService.getUser().subscribe({
      next: (response) => {
        this.user = response.data;
        this.dataSource = response.data;
        console.log('1 Base de datos API Rest', this.user);

        // this.loading = false;
      },
      error: (error) => {
        this.error = error.message
      }
    })
    //this.loading = true;
    this.error = null;



  }
}
