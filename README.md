# Busca de Perfil GitHub

Aplicação web que busca perfis do GitHub pelo nome de usuário e exibe as informações principais do perfil e os repositórios mais recentes, consumindo a API pública do GitHub.

🔗 **Ver no ar:** https://ezimbrao.github.io/busca-perfil/

![Prévia do projeto](preview.png)

## Funcionalidades

- Busca por nome de usuário, pelo botão ou apertando Enter
- Card do perfil com avatar, nome, @login, bio, número de repositórios, seguidores e link para o perfil no GitHub
- Lista dos 5 repositórios atualizados mais recentemente, com linguagem, estrelas e link
- Tratamento de todos os estados da busca:
  - **Carregando**, enquanto a requisição acontece
  - **Usuário não encontrado**, quando a API retorna 404
  - **Falha de rede**, quando não há conexão
  - **Campo vazio**, sem disparar requisição
- Tema escuro com detalhes em azul
- Layout responsivo, funcionando de celular a desktop

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, Flexbox, transições e media queries)
- JavaScript (DOM, `fetch`, `async/await`, `try/catch`)
- [GitHub REST API](https://docs.github.com/pt/rest)

## Estrutura do projeto

```
busca-perfil/
├── index.html
├── style.css
└── script.js
```

## Como executar

Não há dependências nem etapa de build.

1. Clone o repositório:
   ```bash
   git clone https://github.com/ezimbrao/busca-perfil.git
   ```
2. Abra o arquivo `index.html` no navegador.

## O que pratiquei neste projeto

- Consumir uma API REST com `fetch` e `async/await`
- Interceptar o envio de um formulário com `preventDefault`
- Tratar respostas de erro (404) e falhas de rede com `try/catch`
- Atualizar o DOM dinamicamente com os dados recebidos
- Estilizar uma interface escura e responsiva com CSS

## Limitações

A API do GitHub, sem autenticação, limita as requisições por hora para cada endereço de IP. Se o limite for atingido, a aplicação mostra uma mensagem de erro e volta a funcionar depois de um tempo.

## Autor

**Enzo Zimbrão**

- GitHub: [@ezimbrao](https://github.com/ezimbrao)
- LinkedIn: https://www.linkedin.com/in/enzo-zimbr%C3%A3o/s
