//import { PrimaryColumn } from 'typeorm';
/*Passo 1 - criação da classe cliente no dominio*/

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export abstract class User {
  // @PrimaryGeneratedColumn('uuid')
  // private id: string;
  @Column()
  private fullName: string;
  // @Column({ unique: true })
  // private email: string;
  // @Column()
  // private password: string;

  constructor(fullName: string) {
    //this.id = id;
    this.fullName = fullName;
    //this.email = email;
    //this.password = password;
  }

  // public getId(): string {
  //   return this.id;
  // }

  public getFullName(): string {
    return this.fullName;
  }

  // public getEmail(): string {
  //   return this.email;
  // }

  // public getPassword(): string {
  //   return this.password;
  // }
}
/*métodos para acessar os dados nome e id (getId() e getFullName()). 
Isso é típico das entidades de domínio, que encapsulam estado e 
comportamentos relevantes para o negócio.*/
