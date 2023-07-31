# #128161; Projeto de Extração de Dados de Conta de Energia

&#128161;

Este é um projeto de exemplo que demonstra como extrair dados de contas de energia em formato PDF e armazená-los em um banco de dados usando o ORM Prisma. Além disso, o projeto também possui rotas para exibir as faturas cadastradas, filtrar as faturas por critérios específicos e exibir um gráfico com o consumo e o valor por mês de referência.

## &#128196; Pré-requisitos

Antes de executar o projeto, verifique se você possui os seguintes requisitos:

1. Node.js (v14 ou superior) instalado em seu computador.

2. Prisma Client instalado globalmente. Caso não tenha, você pode instalar executando o seguinte comando:

`npm install prisma -g`

3. Banco de dados configurado para ser utilizado pelo Prisma.

## 🔨 Instalação

1. Clone o repositório para o seu computador:

`git clone https://github.com/brunokobi/testeBack.git`
`cd testeBack`

2. Instale as dependências do projeto:

`npm install`

3. Configure o Prisma para utilizar o seu banco de dados. Para isso, crie um arquivo chamado .env na raiz do projeto e adicione a URL do banco de dados. Por exemplo:

`DATABASE_URL=mysql://usuario:senha@endereco-do-banco:porta/nome-do-banco`

4.Execute as migrações do Prisma para criar a tabela no banco de dados:

`prisma migrate dev`

## &#128204; Uso

Após a instalação, você pode iniciar o servidor executando o seguinte comando:

`npm start`

Isso iniciará o servidor em http://localhost:3333.

## ✔️ Rotas disponíveis:

POST /fatura: Envia os dados da conta de energia para o banco de dados e verifica se a conta já foi cadastrada anteriormente. Caso já tenha sido cadastrada, a conta não será cadastrada novamente.

GET /fatura: Exibe a lista das faturas cadastradas no banco de dados. Possui filtros opcionais para consultar faturas específicas.

DELETE /fatura/:id: Deleta uma fatura pelo seu ID.

GET /grafico: Exibe um gráfico com o consumo e o valor por mês de referência das faturas cadastradas.

### Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades para este projeto. Abra uma pull request e teremos prazer em revisá-la.

### Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
