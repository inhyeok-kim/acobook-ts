import {useSelector} from 'react-redux'
import {RootReducerType} from 'src/redux/RootReducer';
import {Pages} from 'src/redux/reducers/PageInfo';
import Today from './pages/Today';
import Balance from 'src/pages/Balance';

function App() {
  const pageInfo = useSelector((state : RootReducerType)=>state.PageInfo);

  function renderPage(){
    const page = pageInfo.page
    switch (page) {
      case Pages.today:
        return <Today />
        break;
      case Pages.balance:
        return <Balance />
        break;
      default:
        return <Today />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
