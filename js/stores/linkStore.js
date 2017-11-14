import AppDispatcher from "../AppDispatcher";
import { ActionTypes } from "../constants";
import { EventEmitter } from "events";

let _links = [];

class linkStore extends EventEmitter {
    constructor(props) {
        super(props);

        AppDispatcher.register(action => {

            if (action.actionType === ActionTypes.RECEIVE_LINKS) {
                console.log("3 in store");
                _links = action.links;
                this.emit("change");
            }
        });
    }

    getAll() {
        return _links;
    }
}

export default new linkStore();