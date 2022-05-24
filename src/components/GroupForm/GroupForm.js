import "../GroupForm/groupform.sass";

function GroupForm() {
    return (
    
      <form className="form">
        <label for="username" className="form__label">Nome:</label>
        <input className="input" id="username" type={"text"} />
  
        <label for="password" className="form__label">Tarefas:</label>
        <textarea className="input" type={"textarea"} />

        <button id="button">Salvar</button>
      </form>
    );
  }
  
  export default GroupForm;