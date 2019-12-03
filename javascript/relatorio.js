var enderecoContrato ="0x66aa9611898D08b1Efe1f413791421B25b05C26a";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signer = provider.getSigner();
var contract = new ethers.Contract(enderecoContrato, contractAbi, signer);

function relatarHoras() 
{
    var nomePrestador=document.getElementById("nomePrestador");
    var mesTrabalhado= document.getElementById("mesTrabalhado");
    var anoTrabalhado= document.getElementById("anoTrabalhado");
    var diaDoMesTrabalhado= document.getElementById("diaDoMesTrabalhado");
    var descricaoTrabalho= document.getElementById("descricaoTrabalho");
    var totalDeHorasTrabalhadas= document.getElementById("totalDeHorasTrabalhadas");
    contract.relatarHoras()
    .then ( (relatoHoras) =>
    {
        console.log("getRelatarHoras, relatoHoras");
        nomePrestador.innerHTML=relatoHoras;
        
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
    contract.gerarRelatorio()
    .then ( (apuraMes) =>
    {
        console.log("getgerarRelatorio, apuraMes");
    })
    .catch ((err) =>
    {
        console.error(err);
        apuraMes = "Erro ao apurar o mês"
    })

}