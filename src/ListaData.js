import { extendObservable } from "mobx";

class ListaData {
  constructor() {
    extendObservable(this, {
      tasks: ["Aprender react", "Hacer una aplicación con React"],
    });
  }

  addTask(task) {
    console.log(task);
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }
}

let Data = new ListaData();
export default Data;
