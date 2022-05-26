function TaskForm() {
  return (
    <form className="form">
      <label for="title">Título:</label>
      <input type="text" className="input" id="title" />

      <label for="date">Data:</label>
      <input type="date" className="input" id="date" />

      <label for="description">Descrição:</label>
      <textarea className="input" id="description"></textarea>

      <label for="taskList">Pertence a lista:</label>
      <input type="text" className="input" id="taskList" />

      <label for="share">Compartilhar?</label>
      <br />
      <input type="checkbox" className="input--checkbox" id="share"></input>

      <br />

      <label for="friendList">Amigos:</label>
      <input type="search" className="input" id="friendList" />
    </form>
  );
}

export default TaskForm;
