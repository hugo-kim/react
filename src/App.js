/* eslint-disable no-undef */
import './App.css';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

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

  const style = { border: '5px solid black', padding: 10, backgroundColor: 'tomato' };
  return (
    <div style={style}>
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

function CounterUseEffect() {
  const [count, setCount] = useState(0);
  console.log('CounterUseEffect', count);

  useEffect(() => {
    console.log('useEffect');
    setInterval(() => {
      console.log('interval');
      setCount(oldCount => oldCount + 1);
    }, 1000)
    // return (() => {
    //   console.log('clean');
    //   clearInterval(id);
    // })
  }, []);
  const style = { border: '5px solid black', padding: 10 };
  return (
    <div style={style}>
      <h1>useEffect Counter</h1>{count}
    </div>
  )
}

function App() {
  return (
    <Container>
      <h2>XENOSYS CO. LTD.</h2>
      <Grid container>
        <Grid item={12} sm={6} md={3}>
          <Counter title="신규주문 카운터" initValue={10} />
        </Grid>
        <Grid item={12} sm={6} md={3}>
          <CounterUseEffect />
        </Grid>
        <Grid item={12} sm={6} md={3}>
          <CounterUseEffect />
        </Grid>
        <Grid item={12} sm={6} md={3}>
          <CounterUseEffect />
        </Grid>

      </Grid>

    </Container>
  );
}

export default App;
