import {get} from "jquery";
import ServerActions from "./actions/ServerActions"

let api = {
    fetchLinks() {
        get("/data/links").done(resp => {
            console.log("1 server query");
            ServerActions.receiveLinks(resp);
        });        
    }
};

export default api;