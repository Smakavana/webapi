import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';
import { UserService } from '../users/user.service';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {

  transform(users: User[], property?: string): User[] {
    let sortProperty = 'LastName';
    if(property != null){
      sortProperty = property;
    }
    console.log ('Sort users by: ', sortProperty);
    return users.sort(compareFn);

    function compareFn(a: User, b:User) {
      const x = a[sortProperty].toUpperCase();
      const y = b[sortProperty].toUpperCase();
      if (x === y) {
        return 0;
      }
      return (x > y) ? 1 : -1;
    }    
  } 
}
