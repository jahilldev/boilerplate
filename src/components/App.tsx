import * as React from "react";
import "./App.css";
import {inject, observer} from "mobx-react";
import SampleStore from "../store/SampleStore";

export interface ISampleProps {
    sampleStore?: SampleStore;
}

@inject('sampleStore')
@observer
class App extends React.Component<ISampleProps> {
    render() {
        const {sampleStore} = this.props;

        return (
            <div className={"sample"}>
                {sampleStore!.hello}
            </div>
        );
    }
}

export default App;
