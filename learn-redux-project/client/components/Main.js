import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render(){
        return (
            <div>
                <h1>
                    <Link to="/test">
                        Reduxstagram
                    </Link>    
                </h1>
                {/* CloneElement is a way of controling the props of the components child 
                It will copy the props from main to first child
                */}
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
})

export default Main;