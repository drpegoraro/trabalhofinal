var contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nomePrestador",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "contaPrestador",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "relatorioEmitido",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "gerarRelatorio",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "prestador",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "mesTrabalhado",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "anoTrabalhado",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "diaDoMesTrabalhado",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "descricaoTrabalho",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalDeHorasTrabalhadas",
				"type": "uint256"
			}
		],
		"name": "relatarHoras",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "relatos",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "mes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ano",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "diaDoMes",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "trabalhoEfetuado",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalHorasTrabalhadas",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];