import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>Main page</div>
      <Outlet />
    </>
  );
}

export default App;
