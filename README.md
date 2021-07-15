# Projeto Amalteia
## Um site que faz cadastros de Funcionários, bem como buscas e atualizações
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto irá precisar do mysql instalado na sua maquina, após a instalação do mesmo 
crie um banco de dados chamado actionsys, com as seguintes tabelas:

```sql
/**Codigo sql criará as tabelas necessárias*/
CREATE TABLE funcionarios(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    admission_date DATE NOT NULL,
    sector VARCHAR(100) NOT NULL,
    office VARCHAR(100) NOT NULL,
    level VARCHAR(100) NOT NULL,
    audit_date_insert DATETIME DEFAULT CURRENT_TIMESTAMP,
    audit_date_update DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
```

### 🎲 Executando o Projeto

### Backend
```bash
# Clone este repositório
$ git clone <https://github.com/savio04/Amalteia.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Amalteia/backend

# Instale as dependências
$ npm install

```
# Arquivo ormconfig-exemple.env

Na raiz do projeto (Amalteia/backend) existe um arquivo ormconfig-exemple.env, nele possui um exemplo dos dados necessários para a conexão com a base de dados.

![alt text](https://github.com/savio04/Amalteia/blob/main/frontend/src/assets/gihubassets/exemple.env.png)

Basta criar um arquivo ormconfig.env e copiar tudo do arquivo ormconfig-exemple.env,
colocando suas credencias do mysql (usuario, senha).
# Iniciando o projeto
```bash
# Execute o comando 
$ npm run dev

# O api inciará na porta:1212
```

### Frontend
```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd Amalteia/frontend

# Instale as dependências
$ npm install

# Execute o projeto
$ npm run start

# O pojeto inciará na porta:3000 - acesse <http://localhost:3000>
```
### Projeto em execução
![alt text](https://github.com/savio04/Amalteia/blob/main/frontend/src/assets/gihubassets/tela.png)

##### 🚧  Em construção...  🚧