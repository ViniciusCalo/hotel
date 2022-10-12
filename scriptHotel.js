		//VARIAVEIS VAZIAS
		hotelName = "";
		username = "";
		//DEFININDO O NOME DO HOTEL
		welcome()
		function welcome() {
			hotelName = prompt("Digite o nome do Hotel?!");

			alert(`O nome do Hotel é ${hotelName}`);
			login();
		}
		//FAZENDO LOGIN
		function login() {
			username = prompt("Digite seu nome: ");
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
			option = parseInt(prompt("Escolha uma opção: 1- Reservar quarto | 2- Cadastrar Hóspedes | 3- Abastecer Carro | 4- Sair"));

			//OPÇÕES
			switch (option) {
				case 1:
					reserva_quartos();
				case 2:
					cadastro_hospedes();
				case 3:
					abastecer_carros();
				case 4:
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

				if (escolha_hospedes === 1) {
					cadastrar_hospedes();
				} else if (escolha_hospedes === 2) {
					pesquisar_hospedes();
				} else if (escolha_hospedes === 3) {
					//inicio();
				} else {
					erro_pesquisar_hospedes();
				}
			}

			function cadastrar_hospedes() {
				valorDiaria = parseFloat(prompt("Digite o valor padrão da diária!"));

				if (valorDiaria <= 0 || valorDiaria == isNaN) {
					alert("Digite um valor válido!!!");
					escolha_hospedes();
				} else if (valorDiaria > 0) {
					// lenght é uma propriedade que retorna a quantidade de itens dentro do array. 
					if (lista_hospedes.length >= 15) {
						alert("Numero máximo de hóspedes cadastrados.");
					} else {
						var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');

						// O método push() permite adicionar um item ao Array/Vetor. Importante dizer que ele adiciona o elemento ao final do Array/Vetor. 
						lista_hospedes.push(nome_hospede);
						console.log(lista_hospedes); // O console é usado apenas para exibir ao desenvolvedor todo mundo que já está cadastrado.
						alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
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

				sistema_cadastrar_hospedes()
			}

			function erro_pesquisar_hospedes() {
				alert('Por favor, informe um número entre 1 e 3');
				sistema_cadastrar_hospedes();
			}

			sistema_cadastrar_hospedes();
			inicio();
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