import {useSelector} from 'react-redux'
import {RootReducerType} from 'src/redux/RootReducer';
import ViewContainer from './pages/views/ViewContainer';

function App() {
  const pageInfo = useSelector((state : RootReducerType)=>state.PageInfo);

  function renderPage(){
    const Page = pageInfo.page
    return <Page />
  }

  function renderViews(){
    const views = pageInfo.views
    return views.map((View,i)=><ViewContainer key={i} view={View} />);
  }

  return (
    <>
      {renderPage()}
      {renderViews()}
    </>
  );
}

export default App;
