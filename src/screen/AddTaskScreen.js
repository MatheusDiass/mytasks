//Components
import TaskForm from "../components/Task/TaskForm";

function TaskScreen() {
  return (
    <div className="addTaskScreen">
      <h1>Adicionar Tarefa</h1>

      <TaskForm />
    </div>
  );
}

export default TaskScreen;
