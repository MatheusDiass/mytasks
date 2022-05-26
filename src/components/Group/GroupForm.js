function GroupForm() {
    return (
      <form className="form">
        <label for="name">Nome:</label>
        <input className="input" id="name" type={"text"} />
  
        <label for="tasks">Tarefas:</label>
        <br/>
        <textarea className="input" type={"textarea"} />
      </form>
    );
  }
  
  export default GroupForm;