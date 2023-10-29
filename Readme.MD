Aplicação Laravel + Angular
Este guia fornece uma visão geral simplificada dos passos para a criação da aplicação

Passo 1: Backend com Laravel
Instalação do Laravel: Instalação Laravel usando o Composer, criando um novo projeto.

Banco de Dados: Configurar as informações do banco de dados no arquivo .env.

Modelos e Migrações: Criação de modelos e migrações para as tabelas do banco de dados usando o comando php artisan make:model.

Controladores: Criação de controladores para realizar operações CRUD usando o comando php artisan make:controller.

Rotas: Definir rotas em routes/web.php ou routes/api.php para os métodos do controlador.

Migrações: Executar as migrações usando php artisan migrate para criar as tabelas no banco de dados.

API: Criação de uma API, fornecendo dados para o frontend.

Passo 2: Frontend com Angular
Criação de um Projeto Angular: Novo projeto Angular com o Angular CLI.

Componentes: Criação de componentes para diferentes partes do aplicativo usando o comando ng generate component.

Rotas: Configuração rotas para navegação entre páginas usando o Angular Router.

Consumir API: Utilizar o Angular HttpClient para consumir os dados fornecidos pela API Laravel.

Exibição de Dados: Exibição de dados obtidos da API nas páginas do aplicativo.

Formulários e Envio de Dados: Criação de formulários para adicionar e editar informações, enviando dados para a API.

Estilização: Estilização do aplicativo com CSS e também usando um framework de design como o Angular Material.

*Lembrando que ao clicar em Adicionar ou Editar, os formulários aparecem logo abaixo das tabelas.