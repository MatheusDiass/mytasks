import'../../assets/sass/components/_form.sass'
import'../../assets/sass/components/_input.sass'

function TaskForm () {
    return (
        
      <form className='form'>
          
          <label>Tarefa:</label><br/>
          <input type="text" className='input' name='tarefa'></input>
          <br/>
          <label >Data:</label><br/>
          <input type="date" className='input'></input>
          
          <br/>
          <label>Detalhes:</label><br/>
          <textarea className='input' ></textarea><br/>
          <br/>
          <br/>
          <label>Pertence a lista:</label><br/>
          <input type="text"className='input' ></input>
          <br/>
          <label>Compartilhar?</label><br/>
          <input type="checkbox" className='input'></input>
          <br/>
          <label>lista de amigos:</label><br/>
          <input type="search"  className='input'></input>
          <br/>
         
      </form>
           

    );
  }
  
  export default TaskForm;