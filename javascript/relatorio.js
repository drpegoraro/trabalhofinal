var enderecoContrato = "0xB47A720427117Ed98A937c5c0989D48492509cdd";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
var signer = provider.getSigner();
var contract = new ethers.Contract(contractAddress, contractAbi, signer);

function RelatarHoras() 
{
    var mesTrabalhado= document.getElementById("mesTrabalhado");
    var anoTrabalhado= document.getElementById("anoTrabalhado");
    var diaDoMesTrabalhado= document.getElementById("diaDoMesTrabalhado");
    var descricaoTrabalho= document.getElementById("descricaoTrabalho");
    var totalDeHorasTrabalhadas= document.getElementById("totalDeHorasTrabalhadas");
}

function gerarRelatorio()
{
    var apuracaoDoMes = document.getElementById("apuracaoDoMes");
}