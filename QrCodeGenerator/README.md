# Gerador de Senhas e Códigos QR

Este projeto Node.js oferece duas funcionalidades principais, acessíveis através de um menu interativo: geração de senhas aleatórias e criação de códigos QR.

## Funcionalidades

* **Geração de Código QR:**
    * Gera códigos QR a partir de links fornecidos pelo usuário.
    * Permite escolher entre códigos QR normais e otimizados para terminal.
* **Geração de Senhas Aleatórias:**
    * Gera senhas aleatórias com base em critérios configuráveis (comprimento, caracteres permitidos).
    * Os critérios são definidos por variáveis de ambiente.

## Pré-requisitos

* Node.js instalado
* npm (gerenciador de pacotes Node.js) instalado

## Instalação

1.  Clone o repositório:

    ```bash
    git clone <URL_do_repositório>
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd <nome_do_diretório>
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

### Geração de Senhas

* Configure as seguintes variáveis de ambiente:
    * `PASSWORD_LENGTH`: Comprimento da senha gerada.
    * `UPPERCASE_LETTERS`: "true" para incluir letras maiúsculas, "false" para não incluir.
    * `LOWERCASE_LETTERS`: "true" para incluir letras minúsculas, "false" para não incluir.
    * `NUMBERS`: "true" para incluir números, "false" para não incluir.
    * `SPECIAL_CHARACTERS`: "true" para incluir caracteres especiais, "false" para não incluir.

## Uso

1.  Execute o script principal (`index.js`):

    ```bash
    node index.js
    ```

2.  Um menu interativo será exibido no terminal.
3.  Selecione a funcionalidade desejada:
    * Para gerar um código QR (opção 1), siga as instruções no terminal para fornecer o link e escolher o tipo de código QR (normal ou terminal).
    * Para gerar uma senha (opção 2), a senha gerada será exibida no terminal.

## Estrutura do Projeto

* `index.js`: Ponto de entrada do aplicativo, contendo o menu interativo.
* `prompts-schema/`: Diretório contendo esquemas de prompt.
    * `prompt-main.js`: Define as opções do menu principal.
    * `prompt-qrcode.js`: Define as perguntas para a criação do QRCode.
* `services/`: Diretório contendo os serviços de cada funcionalidade.
    * `qr-code/`: Diretório contendo os módulos para geração de código QR.
        * `create.js`: Inicia o processo de criação do código QR.
        * `handle.js`: Lida com a geração do código QR.
    * `password/`: Diretório contendo os módulos para geração de senhas.
        * `create.js`: Inicia o processo de criação de senha.
        * `handle.js`: Lida com a geração de senhas aleatórias.

## Dependências

* `chalk`: Para colorir a saída do console.
* `qrcode-terminal`: Para gerar códigos QR no terminal.
* `prompt`: Para obter entradas do usuário no terminal.

## Explicação do `index.js`

O arquivo `index.js` é o ponto de entrada da aplicação. Ele utiliza a biblioteca `prompt` para exibir um menu interativo ao usuário. O menu permite escolher entre gerar um código QR ou gerar uma senha.

* `prompt.get(mainPrompt, async (err, choose) => { ... })`: Obtém a escolha do usuário através do menu principal, definido em `prompt-main.js`.
* `if (choose.select == 1) await createQrCode(err, choose);`: Se o usuário escolher a opção 1 (gerar código QR), a função `createQrCode` é chamada.
* `if (choose.select == 2) await createPassword();`: Se o usuário escolher a opção 2 (gerar senha), a função `createPassword` é chamada.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.