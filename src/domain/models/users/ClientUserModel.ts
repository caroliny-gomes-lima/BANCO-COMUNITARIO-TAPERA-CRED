//import { PrimaryColumn } from 'typeorm';
/*PASSO 1 - criação da classe cliente no dominio*/

//import { Column } from 'typeorm';
import { User } from './UserModel';

export class ClientUser extends User {
  // @Column({ unique: true })
  // private cpf: string;
  constructor(
    //id: string,
    fullName: string,
    //email: string,
    //password: string,
    //cpf: string,
  ) {
    super(fullName);
    //this.cpf = cpf;
  }

  // public getCpf(): string {
  //   return this.cpf;
  // }
}
/*métodos para acessar os dados nome e id (getId() e getFullName()). 
Isso é típico das entidades de domínio, que encapsulam estado e 
comportamentos relevantes para o negócio.*/
