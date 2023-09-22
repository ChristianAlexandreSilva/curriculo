function abrirWhatsapp() {
    console.log("teste");
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;
    var conteudo = "*Formulário de Contato*" + "%0a"
    + "%0a" + "*Nome*: " + nome + "%0a" + "*Sobrenome*: " + sobrenome + "%0a"+ "*E-mail*: " + email + "%0a" + "*Assunto+:" + assunto + "%0a" + "*Mensagem*: " + mensagem;
    var url = `https://api.whatsapp.com/send/?phone=5551992015476&text=${conteudo}&type=phone_number&app_absent=0`  + 
    window.open(url, '_blank').focus();
}
