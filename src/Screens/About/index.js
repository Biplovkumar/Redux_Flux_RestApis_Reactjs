// import React from 'react';

// const About = () => {
import React from 'react'
import  AppDispatcher  from '../Flux/Dispatcher';
import  Store  from '../Flux/stores';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            bip:[{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'}],

        }
    }

    componentDidMount() {
        Store.bind(this, 'incremented');
    }

    componentWillUnmount() {
        Store.unbind(this, 'incremented');
    }

    incremented() {
        this.setState({
            value: Store.getValue()
        })
    }

    handleClick() {
      AppDispatcher.dispatch({
            eventName: 'increment'
        });
    }

    render() {
        var value = this.state.value ? this.state.value : 0;
        return <div>
            <p>{value}</p>
            <button onClick={this.handleClick}>Increment</button>
        </div>;
    }
}

export default About;

//   return (
//           <div>
//              <h1>About...</h1>
//           </div>
//        )
//     }
//  export default About;