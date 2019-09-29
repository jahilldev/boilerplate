import SampleStore from "./SampleStore";

export interface IRootStore {
    sampleStore: SampleStore;
}

export class RootStore implements IRootStore {
    sampleStore: SampleStore;

    constructor() {
        this.sampleStore = new SampleStore(this);
    }
}
