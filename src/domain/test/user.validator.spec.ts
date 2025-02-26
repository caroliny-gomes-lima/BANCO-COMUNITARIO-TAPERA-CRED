/*decribe é como uma agrupador de testes com um
breve descrição sobre do que se trata os teste*/

import { ClientUser } from '../models/users/ClientUserModel';
import { UserValidator } from '../services/validator/UserValidator';

describe('email validator', () => {
  test('Deve retornar um erro quando email for invalido', () => {
    const email = 'test.testandogmail.com';
    expect(() => UserValidator.verifyEmail(email)).toThrow('Invalid email');
  });

  test('Deve retornar um erro quando já existir um usuario com o mesmo email', () => {
    const email = 'test.testando@gmail.com';
    const users: ClientUser[] = [
      new ClientUser(
        '1',
        'Fulano da Silva',
        email,
        'T3st@123!',
        '396.169.290-46',
      ),
    ];
    expect(() => UserValidator.checkEmailAlreadyInUse(users, email)).toThrow(
      'E-mail already in use',
    );
  });

  test('Deve retornar true quando o email não está em uso e lista está vazia', () => {
    const email = 'test.testando@gmail.com';
    const users: ClientUser[] = [];
    expect(UserValidator.checkEmailAlreadyInUse(users, email)).toBe(true);
  });

  test('Deve retornar true quando o email não está em uso e lista não está vazia', () => {
    const email = 'test.testando@gmail.com';
    const users: ClientUser[] = [
      new ClientUser(
        '1',
        'Fulano da Silva',
        'teste@teste.com',
        'T3st@123!',
        '396.169.290-46',
      ),
      new ClientUser(
        '2',
        'Ciclano do Teste',
        'teste@testando.com',
        'T3st@123!',
        '308.540.090-78',
      ),
    ];
    expect(UserValidator.checkEmailAlreadyInUse(users, email)).toBe(true);
  });
});

describe('Password Validator', () => {
  const invalidPasswords = [
    { password: '0@F', message: 'Invalid password' },
    { password: 'Teste@!@', message: 'Invalid password' },
    { password: 'Teste123', message: 'Invalid password' },
    { password: 'Teste@1234', message: 'Invalid password' },
    { password: 'teste@!1', message: 'Invalid password' },
    { password: 'TESTE@!1', message: 'Invalid password' },
    { password: 'TESTEet1', message: 'Invalid password' },
  ];

  test.each(invalidPasswords)(
    'should return error if password is invalid',
    ({ password, message }) => {
      expect(() => UserValidator.verifyPassword(password)).toThrow(message);
    },
  );

  test('it should return true if password is valid', () => {
    const password = '0@Ff8029';
    expect(UserValidator.verifyPassword(password)).toBe(true);
  });
});

describe('CPF Validator', () => {
  const invalidCpf = [
    { cpf: '292.311.810-3', message: 'Invalid CPF' },
    { cpf: '111.111.111-11', message: 'Invalid CPF' },
    { cpf: '292.311.810-31', message: 'Invalid CPF' },
    { cpf: '123.456.789-00', message: 'Invalid CPF' },
  ];

  test.each(invalidCpf)(
    'should return error if cpf is invalid',
    ({ cpf, message }) => {
      expect(() => UserValidator.verifyCpf(cpf)).toThrow(message);
    },
  );
});
