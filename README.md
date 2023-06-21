# Aplicação de Demonstração do Spring Security

Esta aplicação foi criada com o objetivo de demonstrar a usabilidade do Spring Security. Ela fornece recursos de autenticação e autorização para permitir que os usuários acessem o sistema de forma segura.

Para utilizar a aplicação, os usuários devem criar uma conta fornecendo os detalhes de login corretos. Em seguida, podem fazer login no sistema usando essas credenciais. Além disso, a aplicação oferece a opção de redefinição de senha, na qual um token de redefinição é enviado por e-mail para permitir a alteração da senha.

A interação com a aplicação é realizada por meio de uma página React, que fornece uma interface amigável para os usuários.

## Ferramentas Utilizadas
As seguintes ferramentas foram utilizadas no desenvolvimento desta aplicação:

 - ***Spring Boot***: É um framework Java que oferece um ambiente pré-configurado para o desenvolvimento de aplicativos. O projeto utiliza o Spring Boot na versão 2.7.9.
 - ***Spring Boot Actuator***: É uma dependência do Spring Boot que fornece recursos para monitoramento e gerenciamento de aplicativos em tempo de execução.
 - ***Spring Boot Data JPA***: É uma dependência do Spring Boot que fornece suporte à persistência de dados usando a API Java Persistence (JPA).
 - ***Spring Boot Validation***: É uma dependência do Spring Boot que fornece suporte para validação de dados.
 - ***Spring Boot Web***: É uma dependência do Spring Boot para criação de aplicativos web usando o Spring MVC (Model-View-Controller).
 - ***PostgreSQL***: É um banco de dados relacional. Neste projeto, é utilizado como uma dependência de tempo de execução para suportar a conexão com o banco de dados PostgreSQL.
 - ***Lombok***: É uma biblioteca Java que simplifica a criação de código, reduzindo a verbosidade. Essa biblioteca é usada de forma opcional no projeto.
 - ***Spring Boot Security***: É uma dependência do Spring Boot que fornece recursos de segurança para aplicativos web.
 - ***Spring Boot Mail***: É uma dependência do Spring Boot para suporte ao envio de e-mails.
   
Essas ferramentas foram utilizadas para desenvolver uma API de segurança, com recursos de monitoramento, persistência de dados, validação, desenvolvimento web, segurança e envio de e-mails. O projeto foi construído utilizando o Maven como ferramenta de automação de compilação e gerenciamento de dependências.
