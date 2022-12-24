import { Injectable } from '@angular/core';
import { Member } from './members';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

    constructor() { }

  async getAll(): Promise<Member[]> {
    let response = await fetch('./assets/members.json');
    let members = await response.json();

    return members;
  }
}
