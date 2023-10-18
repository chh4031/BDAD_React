import { useEffect, useState } from "react";
import Display from "../Components/Display";
import Control from "../Components/Control";
import Header from "../Components/Header";
import Popup from "../Components/Popup";

const Main = () => {
  const initNumber = 0;
  const [number, setNumber] = useState(initNumber);
  const [numlist, setNumlist] = useState([]);
  const [ispopup, setIspopup] = useState(false);
  const numberhandler = (TYPE) => {
    let tempNum = 0;
    switch (TYPE) {
      case "increase":
        tempNum = number + 1;
        break;
      case "decrease":
        tempNum = number - 1;
        break;
      case "init":
        tempNum = initNumber;
        break;
      default:
        break;
    }
    if (tempNum < 0) {
      window.alert("number == 0 is not");
    } else if (tempNum > 10) {
      window.alert("number > 10 is not");
    } else {
      setNumber(tempNum);
    }
  };
  useEffect(() => {
    // let templist = [...numlist, number];
    let templist = [number, ...numlist];
    setNumlist(templist);
  }, [number]);
  useEffect(() => {
    console.log(numlist);
  }, [numlist]);

  return (
    <div id="main">
      <Display value={number} />
      <Control func1={numberhandler} func2={setNumlist} />
      {numlist.map((item, idx) => (
        <h3 key={idx}>{item}</h3>
      ))}
      <button
        onClick={() => {
          setIspopup(true);
        }}
      >
        팝업 열기
      </button>
      {ispopup ? (
        <Popup
          title={"임시타이틀"}
          content={"내용이다"}
          btn1={"취소"}
          btn2={"확인"}
          func1={() => setIspopup(false)}
          func2={() => {
            window.alert("확인버튼을 눌렀습니다.");
            setIspopup(false);
          }}
          func3={() => setIspopup(false)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Main;
