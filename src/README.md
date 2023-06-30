# Documentação - Desafio Frontend FPass

## Requisitos

- Node.js (v20.2.0)
- yarn (1.22.19)


## Tecnologias usadas

- ReactJs
- TypeScript
- Styled-components


## Setup

Para ter acesso aos dados da Marvel-API​ é necessário gerar uma chave publica e privada. 

Acessando esse [link](https://developer.marvel.com/account), crie uma conta e gere duas chaves (public key e private key) para serem inseridas no arquivo .env na qual iremos configurar a seguir:

## Gerando arquivo .env

Copie o arquivo `env-example` como `.env`

```
cp env-example .env
```
Insira as chaves nas variáveis indicadas

## Desenvolvimento

Use o comando `yarn start`.

```
yarn start
```

## Realizar build do projeto via Docker

```
yarn build
```

## Link demo

https://marvel-characters.allancruz.com.br/