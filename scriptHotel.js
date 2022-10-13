//VARIAVEIS VAZIAS
hotelName = "";
username = "";
//DEFININDO O NOME DO HOTEL
welcome()
function welcome() {
	hotelName = prompt("Digite o nome do Hotel?!");

	alert(`O nome do Hotel é ${hotelName}`);
	username = prompt("Digite seu nome: ");
	login();

}
//FAZENDO LOGIN
function login() {

	password = parseFloat(prompt(`Seja bem-vindo ${username}!! Digite a sua senha.`));

	if (password == "2678") {
		inicio();
	} else {
		alert("Senha incorreta, digite novamente!");
		login();
	}
}
//HOME DO HOTEL
function inicio() {
	alert(`Bem vindo ao Hotel ${hotelName},  ${username} É um imenso prazer ter você por aqui!`);
	option = parseInt(prompt("Escolha uma opção: 1- Reservar quarto | 2- Cadastrar Hóspedes | 3- Abastecer Carro | 4- Registrar Evento | 5- Buffet | 6- Sair"));

	//OPÇÕES
	switch (option) {
		case 1:
			reserva_quartos();
			break;
		case 2:
			cadastro_hospedes();
			break;
		case 3:
			abastecer_carros();
			break;
		case 4:
			eventos();
			break;
		case 5:
			buffet();
			break;
		case 6:
			sair();

	}
}
//RESERVA DE QUARTOS
function reserva_quartos() {
	alert(`Bem vindo ao Hotel ${hotelName}, ${username}.É um imenso prazer ter você aqui!`);
	valorDiaria = parseFloat(prompt("Digite o valor da diária do hotel: "));

	//validando o valor da diaria
	if (valorDiaria <= 0 || valorDiaria == isNaN) {
		alert("Valor inválido!!!");
		inicio();
	} else {
		//validando a diaria
		diaria = parseFloat(prompt("Digite a quantidade de dias que ficará no hotel: "));
		if (diaria <= 0 || diaria > 30 || diaria == isNaN) {
			alert("Informe um valor Valido");
			inicio();
		} else {
			//calculando o valor total da hospedagem	

			valorTotal = valorDiaria * diaria;

			alert(`O valor total do pacote de ${diaria} dias de hospedagem é igual a R$ ${valorTotal}`);
		}
	}

	nomeHospede = prompt("Digite o nome do hóspede: ");
	confirma = prompt(`Deseja confirmar a reserva do ${nomeHospede} de ${diaria} dias, por R$ ${valorTotal}? (S - Sim | N - Não)`);

	if (confirma === "S" || confirma === "s") {
		alert(`Reserva para ${nomeHospede} realizada !`);
	} else if (confirma === "N" || confirma === "n") {
		alert(`Reserva não realizada!`);
	} else {
		alert("Selecione uma opção válida!");
	}

	inicio();
}

function cadastro_hospedes() {
	alert(`Bem vindo ao Hotel ${hotelName}, ${username}.É um imenso prazer ter você aqui!`);
	var lista_hospedes = [];

	function sistema_cadastrar_hospedes() {

		var escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

		switch (escolha_hospedes) {
			case 1:
				cadastrar_hospedes();
				break;
			case 2:
				pesquisar_hospedes();
				break;
			case 3:
				inicio();
				break;
			default:
				erro_pesquisar_hospedes();
				break;
		}
	}

	function cadastrar_hospedes() {
		valorDiaria = parseFloat(prompt("Digite o valor padrão da diária!"));
		gratuidade = 0;
		meia = 0;
		valorTotal_hosp = 0;
		if (valorDiaria <= 0 || valorDiaria == isNaN) {
			alert("Digite um valor válido!!!");
			sistema_cadastrar_hospedes();
		} else if (valorDiaria > 0) {
			registraHospedes();
		}

		function registraHospedes() {
			// lenght é uma propriedade que retorna a quantidade de itens dentro do array. 
			if (lista_hospedes.length >= 15) {
				alert("Numero máximo de hóspedes cadastrados.");

			} else {
				nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');
				idade_hospede = parseInt(prompt("Digite a idade do hospede: "));

				if (idade_hospede < 6) {
					alert(`${nome_hospede}, possui gratuidade`);
					gratuidade++;
				} else if (idade_hospede >= 60) {
					alert(`${nome_hospede}, paga meia!`);
					meia++;
					valorTotal_hosp += valorDiaria / 2;
				} else {
					valorTotal_hosp += valorDiaria;
				}
				// O método push() permite adicionar um item ao Array/Vetor. Importante dizer que ele adiciona o elemento ao final do Array/Vetor. 
				lista_hospedes.push(nome_hospede);
				console.log(lista_hospedes); // O console é usado apenas para exibir ao desenvolvedor todo mundo que já está cadastrado.
				alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
				sequencia();
			}
		}
		function sequencia() {
			continuar = prompt("Deseja cadastrar mais um hospede? digite uma das opções(SIM | PARE)");
			if (continuar === "SIM" || continuar === "sim") {
				registraHospedes();
			} else if (continuar === "PARE" || continuar === "pare") {
				alert(`${username}, o valor total das hospedagens é: R$ ${valorTotal_hosp}, ${gratuidade} gratuidade(s); ${meia} meia(s)`);
				sistema_cadastrar_hospedes();
			} else {
				alert("Escolha uma opção valida!!");
				sequencia();
			}
		}

		sistema_cadastrar_hospedes();

	}

	function pesquisar_hospedes() {
		var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
		// O método includes() procura por um elemento dentro do Array e retorna verdadeiro ou falso. Caso queira comparar números, o mais indicado é o método find();
		if (lista_hospedes.includes(nome_hospede)) {
			alert(nome_hospede + ' encontrada(o).')
		} else {
			alert(nome_hospede + ' não foi encontrada(o).')
		}

		sistema_cadastrar_hospedes();
	}

	function erro_pesquisar_hospedes() {
		alert('Por favor, informe um número entre 1 e 3');
		sistema_cadastrar_hospedes();
	}

	sistema_cadastrar_hospedes();
	inicio();
}
function eventos() {
	horaEvento = parseInt(prompt("Qual a duração do evento?"));
	totalGarcom = parseInt(prompt("Quantos garçons serão necessário para o evento?"));
	valorEvento = totalGarcom * horaEvento * 10.50;
	alert(`Custo Total: R$ ${valorEvento}`);

	confirmaEvento = prompt("Gostaria de confirmar a reserva? (S | N)");

	if (confirmaEvento === "S" || confirmaEvento === "s") {
		alert(`${username}, reserva efetuada com sucesso!`);
		inicio();
	} else if (confirmaEvento === "N" || confirmaEvento === "n") {
		alert("Reserva cancelada!!!");
		inicio();
	} else {
		alert("Digite uma opção válida!!");
		eventos();
	}

}

function buffet() {
	const convidados = parseInt(prompt("Qual o numero de convidados do evento?"));
	cafe = convidados * 0.80;
	agua = convidados * 0.40;
	quantCafe = convidados * 0.2;
	quantAgua = convidados * 0.5;
	quantSalgados = convidados * 7;
	salgados = (quantSalgados / 100) * 34;
	buffetTotal = cafe + agua + salgados;

	if (convidados > 350) {
		alert("Quantidade de convidados superior à capacidade máxima.");
		inicio();
	} else if (convidados > 0 && convidados <= 350) {
		alert(`O evento precisará de ${quantCafe} litros de café, ${quantAgua} litros de água, ${quantSalgados} salgados. O custo total do evento será de R$ ${buffetTotal}`);
		confirmaBuffet = prompt("Gostaria de confirmar a reserva? (S | N)");
		if (confirmaBuffet === "S" || confirmaBuffet === "s") {
			alert(`${username}, reserva efetuada com sucesso!!`);
			inicio();
		} else if (confirmaBuffet === "N" || confirmaBuffet === "n") {
			alert("Reserva não efetuada!");
			inicio();
		} else {
			alert("Selecione uma opção válida!");
			buffet();
		}
		auditorio();
	}
}

function auditorio() {
	convidados
}
function abastecer_carros() {
	alert(`Bem vindo ao Hotel ${hotelName}, ${username}.É um imenso prazer ter você aqui!`);
	inicio();
}

function erro() {
	alert('Por favor, informe um número entre 1 e 4');
	inicio();
}

function sair() {
	var confirmaSaida = confirm('Você deseja sair?');
	switch (confirmaSaida) {
		case 1:
			alert(`Muito obrigado e até logo, ${username}`);
			window.close();
			break;
		default:
			inicio();
	}
}