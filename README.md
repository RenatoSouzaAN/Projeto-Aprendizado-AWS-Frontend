# Projeto-AWS (AWS-Lambda + SQS + DynamoDB + NodeJS)
Projeto de aprendizado onde uma API POST em NodeJS recebe um payload de uma transação (idempotencyId, amount, type: credit /debit).

Essa rota executa uma função que coloca a transação em uma AWS SQS (fila), usando SDK da AWS.

Junto, uma função AWS Lambda conectada nessa SQS que pegua cada mensagem e salva num banco de dados AWS DynamoDB.

Foi criado um script de teste para criar 100 transações diferentes e fazer a requisição POST.

Foi feita uma tela simples usando Next.JS que exibe as transações salvas no DynamoDB, a partir de uma rota GET.


Link para o back-end: https://github.com/RenatoSouzaAN/Projeto-Aprendizado-AWS-Backend

## Parte front-end do projeto

Configuração

Siga os passos abaixo para configurar e executar o projeto.
Pré-requisitos

    Node.js e npm instalados em sua máquina
    Conta AWS com credenciais (access key ID, secret access key)
    AWS CLI instalado (para configurar o DynamoDB e SQS)

Instalação

    Clone o repositório:

    bash

git clone https://github.com/seu-nome-de-usuario/seu-projeto.git

Acesse o diretório do projeto:

bash

cd seu-projeto

Instale as dependências:

bash

npm install

Dentro do arquivo aws.js, ponha suas credenciais AWS como mostra abaixo:

config = 

    region: "sua-regiao-aws"
    accessKeyId: "sua-access-key-id"
    secretAccessKey: "sua-secret-access-key"

    Substitua sua-regiao-aws, sua-access-key-id e sua-secret-access-key por suas credenciais AWS reais.

Executando o Projeto

    Inicie o servidor:

    bash

    npm run dev

    Abra seu navegador e acesse http://localhost:3000 para visualizar a aplicação Next.js.

Estrutura do Projeto

Descreva brevemente a estrutura do seu projeto.

    /src: Contém o código-fonte da aplicação Next.js.
        /app: Contém funções de utilidade e componentes.
            /utils: Contém configuração e utilidades da AWS.
        /pages: Contém páginas do Next.js.

Recursos

Liste os principais recursos do seu projeto.

    Rota de API para enviar transações para AWS SQS
    Função AWS Lambda para processar mensagens SQS e salvar no DynamoDB
    Aplicação Next.js para exibir transações do DynamoDB

Solução de Problemas

Se encontrar problemas, siga estas etapas de solução de problemas:

    Variáveis de Ambiente: Verifique se as variáveis de ambiente no arquivo .env estão formatadas corretamente e foram carregadas.

    Dependências: Confirme se todas as dependências foram instaladas usando o comando npm install.

    Credenciais AWS: Verifique suas credenciais AWS no arquivo .env.

    Ordem de Carregamento: Certifique-se de que o módulo dotenv seja carregado no início do arquivo de ponto de entrada do seu aplicativo.

Informações Adicionais

Pode-se encontrar dificuldades na integração entre ".env" e as credenciais da AWS,sendo necessário por o valor bruto no arquivo "aws.js", localizado em "projeto-luiggi-front/next-dynamodb/src/app/utils".
