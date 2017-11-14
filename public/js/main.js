import React from "react";
import api from "../../js/api";
import linkStore from '../../js/stores/linkStore';

let _getAppState = () => {
    return {links: linkStore.getAll() };
};
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = _getAppState();
        this.onchange = this.onchange.bind(this);
    }

    componentDidMount() {
        api.fetchLinks();

        //subscribe
        console.log("subscribing to store change");
        linkStore.on("change", this.onchange);

    };

    componentWillUnmount() {
        console.log("removing subscription");
        linkStore.removeListener("change", this.onchange);

    }

    onchange() {
        console.log("4 in view", _getAppState());
        this.setState(_getAppState());
    }

    render() {
        let linksNodes = 
            this.state.links.map(l => {return <li key={l.title}>{l.title}</li>});
        
        return <div>
            <h3>hello react with es6!</h3>
            <ul>
               {linksNodes}
            </ul>
        </div>
    }
}

export default Main;

