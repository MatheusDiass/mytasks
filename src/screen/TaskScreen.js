//Components

import TaskForm from "../components/AddTasks/TaskForm";


function TaskScreen() {
  return (
    <div className="TaskScreen">
      <h1>Adicionar tarefa</h1>
    
      <TaskForm />
    </div>
  );
}

export default TaskScreen;
