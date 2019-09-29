import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "mobx-react";

import {RootStore} from "./store/RootStore";
import App from "./components/App";

const rootStore = new RootStore();

const Root = () => (
    <Provider {...rootStore}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Root/>, document.getElementById('root'));

