const nome = document.getElementById("nomeCLI").value;
const idade = Number(document.getElementById("idadeCLI").value);
const sexo = document.getElementById("sexoCLI").value;
const peso = parseFLoat(document.getElementById("pesoCLI").value);

function render(){
  let tableInformation = `<center><table border="1"></center>
  <caption>Adidas</caption>
   <tr>
     <th colspan="3" width="500px">Informações sobre o paciente</th>
   </tr>
  <tr>
     <th>Nome</th>
     <th>Idade</th>
     <th>Sexo</th>
     <th>Peso</th>
  </tr>
   <tr>
     <td>${nome}</td>
     <td align="center">${idade}</td>
     <td align="center">${sexo}</td>
     <td align="right">${peso}</td>
   </tr>
   <tr>
     <th>Veredito:</th>
     <th>${resultado}</th>
   </tr>
  </table>`;
  const div = document.getElementsByClassName("render");
  return div.insertAdjacentHTML( 'afterbegin' , tableInformation );
}

