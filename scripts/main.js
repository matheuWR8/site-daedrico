//TROCA DA IMAGEM DE CAPA AO CLICAR

//seleciona a imagem como uma variável constante
const imagem = document.querySelector("#capa");

//cria uma função executada ao clicar na imagem
imagem.onclick = () => {
	const localImg = imagem.getAttribute("src"); /*seleciona o atributo src da imagem como uma variável*/
	//se o local da imagem for o da original, src será substituído pelo local da alternativa; e viceversa
	if (localImg === "imagens/soulcairn.jpg") {
	imagem.setAttribute("src", "imagens/deadlands.jpg");
	} else {
		imagem.setAttribute("src", "imagens/soulcairn.jpg");
	}
}


//MENSAGEM DE BOAS VINDAS COM O NOME DO USUÁRIO

//seleciona o botão no fim da pag e o cabeçalho como variáveis
let botao = document.querySelector("button");
let heading = document.querySelector("#boasvindas");

//cria uma função que solicita o nome e armazena-o no arm. local e exibe-o no cabeçalho
function setUserName() {
	const nome = prompt("Por favor, digite o seu nome:");
	if (!nome){
		setUserName();
	} else {
	localStorage.setItem("name", nome);
	heading.textContent = `Seja bem vindo, ${nome}!`;
	}
}

//se tiver o nome armazenado (else) ele exibe no cabeçalho; caso contrário, a função acima é executada
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	heading.textContent = `Seja bem vindo, ${storedName}!`;
}

//ao clicar no botao, a função é executada e o nome pode ser alterado
botao.onclick = () => {
	setUserName();
};

