import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import "react-toastify/dist/ReactToastify.css";
import { app } from "./firebase.config.jsx";
import "./admin/style/app.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider app={app} store={store}>
    <App />
  </Provider>
);
