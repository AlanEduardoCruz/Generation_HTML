  // Escopo Global

  function hello() {
    // Escopo Local
    alert("Hello World!");
  }

  
  let nome = document.getElementById("nome");
  let email = document.getElementById("email");
  let texto = document.getElementById("texto");


  function enviar() {

    let novoNome =  nome.value;
    let novoEmail = email.value;
    let novoTexto = texto.value;

    alert(`Nome: ${novoNome}  - Email: ${novoEmail}  - Descrição: ${novoTexto}`);

  }
   
 

