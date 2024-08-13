/*criação do validator para validar os dados do cliente
antes de criar um novo cliente.
Os métodos de validação garantem que os dados estão corretos 
e que não há duplicações.*/
//import { ClientUser } from 'src/domain/models/users/ClientUserModel';

export class UserValidator {
  public static ERROR_ID_INVALID = 'Invalid id';
  public static ERROR_EMAIL_INVALID = 'Invalid email';
  public static ERROR_PASSWORD_INVALID = 'Invalid password';
  public static ERROR_EMAIL_ALREADY_IN_USE = 'E-mail already in use';
  public static ERROR_CPF_ALREADY_IN_USE = 'E-mail already in use';
  public static ERROR_CPF_INVALID = 'Invalid CPF';
  public static ERROR_FULLNAME_INVALID = 'Invalid fullName';

  public static ACCEPTED_FULLNAME_LENGHT = 2;

  private static regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    cpf: [/[^\d]+/g, /^\d{11}$/],
  };

  // Exemplo de validação de ID (pode ser um UUID ou outro formato)
  static isValidId(id: string): void {
    if (id.length === 0) {
      throw new Error(this.ERROR_ID_INVALID);
    }
  }

  // Exemplo de validação de nome completo (não pode estar vazio e deve ter pelo menos dois nomes)
  static isValidFullName(fullName: string): void {
    if (fullName.trim().split(' ').length < this.ACCEPTED_FULLNAME_LENGHT) {
      throw new Error(this.ERROR_FULLNAME_INVALID);
    }
  }

  static verifyEmail(email: string): void {
    if (!this.regex.email.test(email)) {
      throw new Error(this.ERROR_EMAIL_INVALID);
    }
  }

  static verifyPassword(password: string): boolean {
    if (!this.regex.password.test(password)) {
      throw new Error(this.ERROR_PASSWORD_INVALID);
    }
    return true;
  }

  // static checkEmailAlreadyInUse(users: ClientUser[], email: string): void {
  //   if (users.some((user) => user.getEmail() === email)) {
  //     throw new Error(this.ERROR_EMAIL_ALREADY_IN_USE);
  //   }
  // }

  // static checkCpfAlreadyInUse(user: ClientUser[], cpf: string): void {
  //   if (user.some((user) => user.getCpf() === cpf)) {
  //     throw new Error(this.ERROR_CPF_ALREADY_IN_USE);
  //   }
  // }

  static verifyCpf(cpf: string): void {
    const cleanedCpf = cpf.replace(this.regex.cpf[0], '');

    if (
      this.regex.cpf[1].test(cleanedCpf) ||
      this.isKnownInvalidCpf(cleanedCpf)
    ) {
      throw new Error(this.ERROR_CPF_INVALID);
    }

    if (!this.validateCpfDigits(cleanedCpf)) {
      throw new Error(this.ERROR_CPF_INVALID);
    }
  }

  private static isKnownInvalidCpf(cpf: string): boolean {
    const knownInvalidCpfs = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ];
    return knownInvalidCpfs.includes(cpf);
  }

  private static validateCpfDigits(cpf: string): boolean {
    let sum = 0;
    let remainder: number;

    // calcula o primeiro digito
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    // calcula o segundo digito
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    return remainder === parseInt(cpf.substring(10, 11));
  }
}
