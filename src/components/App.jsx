import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';


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

    // Get user data from github
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
            }.bind(this),
            errror: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }

    // Get user repos
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page'+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            errror: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return (
            <div>
                <Profile {...this.state} />
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
