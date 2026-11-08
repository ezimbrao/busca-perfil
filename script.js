const form = document.getElementById("form-buscar");
const campo = document.getElementById("campo-buscar");
const mensagem = document.getElementById("status");
const perfil = document.getElementById("perfil");
const repos = document.getElementById("repos");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // não deixa a página recarregar

  const usuario = campo.value.trim();

  if (usuario === "") {
    mensagem.textContent = "Digite um nome de usuário.";
    return;
  }

  mensagem.textContent = "Carregando...";
  perfil.innerHTML = "";
  repos.innerHTML = "";

  try {
    const resposta = await fetch("https://api.github.com/users/" + usuario);

    if (resposta.status === 404) {
      mensagem.textContent = "Usuário não encontrado.";
      return;
    }

    if (!resposta.ok) {
      mensagem.textContent = "Erro ao buscar. Tente de novo mais tarde.";
      return;
    }

    const dados = await resposta.json();

    perfil.innerHTML = `
      <img src="${dados.avatar_url}" width="120" alt="Avatar">
      <h2>${dados.name || dados.login}</h2>
      <p>@${dados.login}</p>
      <p>${dados.bio || "Sem bio."}</p>
      <p>${dados.public_repos} repositórios · ${dados.followers} seguidores</p>
      <a href="${dados.html_url}" target="_blank">Ver perfil no GitHub</a>
    `;

    const respostaRepos = await fetch(dados.repos_url + "?sort=updated&per_page=5");
    const lista = await respostaRepos.json();

    lista.forEach(function (repo) {
      repos.innerHTML += `
        <li>
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          — ${repo.language || "sem linguagem"} · ★ ${repo.stargazers_count}
        </li>
      `;
    });

    mensagem.textContent = "";
  } catch (erro) {
    mensagem.textContent = "Falha de rede. Verifique sua conexão.";
  }
});