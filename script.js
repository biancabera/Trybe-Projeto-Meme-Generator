// Requisito 1
// acesso minha ID para que eu possa adicionar um evento do tipo KEYUP executando minha função inputText
    let outputText = document.getElementById('text-input'); 
 outputText.addEventListener('keyup', inputText); 
// criando minha função na qual vai ser executada o texto na caixa input
 function inputText () { 
    let output = document.getElementById('text-input'); 
    let texto = document.getElementById('meme-text');
// com a propriedade value a gente consegue resgatar o valor dos inputs
 texto.innerText = output.value; 
}
// Requisito 2
let memeInsert = document.getElementById('meme-insert'); 
// usei o evento do tipo 'change' pois ao mudar o arquivo ele já será carregado, seguido do exemplo do link da linha 18 e consultando https://www.w3schools.com/jsref/event_onchange.asp
memeInsert.addEventListener('change', inputImage); 
function inputImage (event) { 
    let outputImage = document.getElementById('meme-image');
//Consultando a dica dada no repositório do projeto https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    outputImage.src = URL.createObjectURL(event.target.files[0]);

} 