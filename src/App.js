import { Provider } from "react-redux";
import Aside from "./components/aside";
// import Formwrapper from "./components/fromwrap";
import Formwrapper from "./components/formwrap";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
       <div className="container">
      <div className="main">
        <Aside />
        <Formwrapper />
      </div>
    </div>
    </Provider>
  );
}

export default App;
