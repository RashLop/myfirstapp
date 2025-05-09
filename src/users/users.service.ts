import { Injectable } from '@nestjs/common';
import { User } from './users.interface'

@Injectable()
export class UsersService {
private users: User[] = []; 
private currentId = 1; 

findALL(): User[]{
    return this.users;
}

findOne(id:number): User | undefined{
    return this.users.find(user => user.id === id); 
}

create(userData: Omit<User, 'id'>): User {
    const newUser: User ={
        id: this.currentId++,
        ...userData
    }; 
    this.users.push(newUser); 
    return newUser; 
}

update(id: number, updateData: Partial<Omit<User, 'id'>>): User | null{
    const user = this.findOne(id); 
    if(!user) return null; 
    Object.assign(user, updateData); 
    return user; 
}

remove(id: number): User | null{
    const index =this.users.findIndex(user => user.id === id); 
    if(index === -1) return null; 
    const deletedUsers = this.users.splice(index, 1)[0]; 
    return deletedUsers;
}
}

