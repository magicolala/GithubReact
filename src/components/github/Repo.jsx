import React, {Component} from 'react';

class Repo extends Component{

    render(){
        const {repo} = this.props;

        return (
            <li className="list-group-item">
                <a href={repo.html_url}>
                    <a> {repo.name}
                    </a> : {repo.description}
                </a>
            </li>
        )
    }
}



export default Repo
