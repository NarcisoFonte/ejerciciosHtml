//Variable global.
let idCounter = 0; //es igual a 0 porque queremos que empiece a contar desde 0.
//Recogemos y guardamos en una constante el valor del input (tipo text).
const input = document.querySelector('input[type="text"]'); //usamos los corchetes para llamar justo al tipo de input que queremos.
//Creamos un evento para que cuando clickemos en el botón añadir (submit) agregue la tarea a la lista.
userInput.addEventListener("submit", (event) => {
  console.log("El usuario ha escrito una tarea");
  addTask();
});

list.addEventListener('click', (event)=> {
  //console.log(event); //Con esto podemos buscar en srcElement/nodeName. Esto es para saber el nombre del nodo.
  //console.log(event.srcElement.nodeName);
  if (event.srcElement.nodeName =='INPUT'){
    actualizarStats();
  } else if (event.srcElement.nodeName == 'IMG') {
    //console.log(event.srcElement.parentNode.id); //esto lo usamos para saber el id de la tarea generada.
    borrarTarea(event.srcElement.parentNode.id);
  }
});

//Creamos la función addTask.
function addTask() {
    idCounter++; //El contador nos va a servir para hacer únicas cada tarea y cuando queramos borrar una tarea, sólo borremos esa.
    let newValue = input.value; //el valor de la variable es el valor de la constante input.
    if (input.value != "") {
    //Con esto hacemos que si no escribimos una tarea, no añada una tarea vacía.

    list.innerHTML +=
      //+= sirve para añadir tareas sin borrar las anteriores. Cómo son strings las concatenas, si fuesen números los podría sumar.
    ` 
    <div class="task-container" id='${idCounter}'>
    <label>
        <input type="checkbox">
        ${newValue}
    </label>
    <img src="img/cubo-de-basura.png" class="close-btn">
    </div>
    `;
    input.value = ""; //Con esto hacemos que el texto del área de texto se borre una vez añadamos la tarea.
    actualizarStats();
}}
//Creamos la función actualizarStats
function actualizarStats() {
    let elementList = list.querySelectorAll('div'); //Esto es para seleccionar todos los div que se generen en este list
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked'); //Seleccionamos todos los checked.
    let tareasPendientes = elementList.length - checkbox.length;
    stats.innerHTML = `Tareas pendientes: ${tareasPendientes} Tareas completadas: ${checkbox.length}`;
}

//Creamos la función borrarTarea.
function borrarTarea(id) {
    let tareaBorrada = document.getElementById(id);
    list.removeChild(tareaBorrada);
    actualizarStats();
};
