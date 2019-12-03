var enderecoContrato ="0x692a70D2e424a56D2C6C27aA97D1a86395877b3A";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
var signer = provider.getSigner();
var contract = new ethers.Contract(enderecoContrato, contractAbi, signer);

function RelatarHoras() 
{
    var nomePrestador=document.getElementById("nomePrestador");
    var mesTrabalhado= document.getElementById("mesTrabalhado");
    var anoTrabalhado= document.getElementById("anoTrabalhado");
    var diaDoMesTrabalhado= document.getElementById("diaDoMesTrabalhado");
    var descricaoTrabalho= document.getElementById("descricaoTrabalho");
    var totalDeHorasTrabalhadas= document.getElementById("totalDeHorasTrabalhadas");
    then ( (relatoHoras) =>
    {
        console.log("getRelatarHoras, relatoHoras");
    })
    .catch ((err) =>
    {
        console.error(err);
        relatoHoras = "Erro ao relatar as horas"
    })
}

function gerarRelatorio()
{
    var apuracaoDoMes=document.getElementById("apuracaoDoMes");
    then ( (apuraMes) =>
    {
        console.log("getgerarRelatorio, apuraMes");
    })
    .catch ((err) =>
    {
        console.error(err);
        apuraMes = "Erro ao apurar o mês"
    })

}