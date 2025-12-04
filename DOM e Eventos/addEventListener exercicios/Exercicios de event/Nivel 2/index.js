// 4. Mostrar texto digitado em tempo real
const input = document.getElementById('campo');

/*--------------------------*/
// 5. Validar se o campo está vazio no input

input.addEventListener("input", (event) => {
    console.log((event.target.value === ""? "Campo vazio" : "Campo preenchido"));
});
