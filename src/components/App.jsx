import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'magicolala',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    render(){
        return (
            <div>
                {this.state.username}
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps =  {
    clientId: '32dbd5b550a4c9f905c0',
    clientSecret: 'f849ff8ce3c1a1535667963c4e153eaa7ebfa8e3'
}

export default App
