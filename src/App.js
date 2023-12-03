/* eslint-disable no-undef */
import './App.css';
import { useState } from 'react';

function Counter({ title, initValue }) {
  // let countState = useState(initValue);
  // let count = countState[0];//읽은 값
  // let setCount = countState[1];//바꿀때 사용할 값(현재미정)
  const [count, setCount] = useState(initValue);
  //count useState함수 결과값의 첫번째 원소값이 있는 위치 주소를 가르킨다. 포인터변수라 생각해 보자.
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  function up() {//증가버튼이 눌러지면 countState[0]에 1 증가
    const newCount = count + step;
    setCount(newCount);//old값과 현재값 비교=>변화가 있을시만 작동(함수 rendering됨.)=>countState[1]값 변경
    const newHistory = [...history]; //복사본 만들기
    newHistory.push(newCount);
    setHistory(newHistory);
  }

  const stepHandler = (evt) => {
    // console.log('change', typeof (evt.target.value));
    setStep(Number(evt.target.value));
  };

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={up}>+/-</button>
      <input type="number" value={step} onChange={stepHandler} />
      {count}
      <ol>
        {/* {[<li>5</li>,<li>5</li>]} */}
        {history.map((e, index) => {
          return <li key={index}>{e}</li>
        })}

      </ol>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>XENOSYS CO. LTD.</h2>
      <Counter title="신규주문 카운터" initValue={10} />
      {/* <Counter title="수리의뢰 카운터" initValue={20} /> */}

    </div>
  );
}

export default App;
