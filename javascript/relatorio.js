var enderecoContrato = "0x58ea53610aEe30952142fC9d39cADF11341269fd";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

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