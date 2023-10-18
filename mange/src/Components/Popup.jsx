import "./styles/Popup.css";

const Popup = ({title, content, btn1, btn2, func1, func2, func3}) => {
  return (
    <>
      <div className="popupBG" onClick={func3}>
      <div className="popup" onClick={(e)=>{
        e.stopPropagation();
      }}>
        <h1>{title}</h1>
        <h3>{content}</h3>
        <div className="btnWrap">
            <button onClick={func1}>{btn1}</button>
            <button onClick={func2}>{btn2}</button>
        </div>
        </div>
      </div>
    </>
  );
};
export default Popup;
