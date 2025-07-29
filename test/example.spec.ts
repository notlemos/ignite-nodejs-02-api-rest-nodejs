import { expect, test } from 'vitest'

test('o usuario consegue criar uma nova transação', () => {
  // Enunciado -> o que vai fazer
  // Fazer a chamada HTTP p/ criar uma nova transação -> A OPERAÇÃO

  // VALIDAÇÃO
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
