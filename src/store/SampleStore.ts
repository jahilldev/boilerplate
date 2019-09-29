import {IRootStore, RootStore} from "./RootStore";

class SampleStore {
    rootStore: RootStore;

    constructor(rootStore: IRootStore) {
        this.rootStore = rootStore;
    }

    get hello(): string {
        return "Hello from SampleStore!";
    }
}

export default SampleStore;
