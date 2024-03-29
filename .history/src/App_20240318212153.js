import "./App.css";
import { Box } from "./component/Box";

function App() {
  return (
    <div className='content'>
      <div className='game_screen'>
        <Box title='YOU' />
        <Box title='COMPUTER' />
      </div>
      <div className='btn_wrap'>
        <button className='scissors'>가위</button>
        <button className='rock'>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
