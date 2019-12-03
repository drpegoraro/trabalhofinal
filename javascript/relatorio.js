var enderecoContrato="0x4e75B68Ff5434844b34AC39De37Cbc325D9A22f0";
var provedor= new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signer= provider.getSigner();
var contract= new ethers.Contract(enderecoContrato, contractAbi, signer);

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
        console.log("getrelatarHoras", relatoHoras);
        nomePrestador.innerHTML=relatoHoras;
        mesTrabalhado.innerHTML=relatoHoras;
        anoTrabalhado.innerHTML=relatoHoras;
        diaDoMesTrabalhado.innerHTML=relatoHoras;
        descricaoTrabalho.innerHTML=relatoHoras;
        totalDeHorasTrabalhadas.innerHTML=relatoHoras;
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
        console.log("getgerarRelatorio", apuraMes);
    })
    .catch ((err) =>
    {
        console.error(err);
        apuraMes = "Erro ao apurar o mês"
    })

}