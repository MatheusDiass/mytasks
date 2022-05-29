function Button({ text, click }) {
  return (
    <div className="box">
      <input type={"button"} className="box__button" value={text} onClick={click} />
    </div>
  );
}

export default Button;
