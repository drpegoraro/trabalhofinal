var enderecoContrato = "0x5B17349866217b0C97A967ef9e23d220267aaa6F";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();

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