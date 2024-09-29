
import { store } from "./Store";
import { Provider } from "react-redux";

// const { Provider } = require("react-redux");

export default function Providers({ children }) {
    return <Provider store={store}>
        {children}
    </Provider>
}