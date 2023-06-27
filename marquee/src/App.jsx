import './App.css'
import Marquee from './Marquee';
// 데이터 
const DATA_LIST = [
  "Marquee Text Test 1",
  "Marquee Text Test 2",
  "Marquee Text Test 3"
];

const DATA_LIST2 = ["A", "B", "C"];

function App() {

  return (
    <>
    <div className="wrap">
      <Marquee list={DATA_LIST} time={5}hovering="inherit" />
      <Marquee list={DATA_LIST2} time={3} />
    </div>
     
       
    </>
  )
}

export default App