import React, { Component } from 'react';
import List from '../components/List';
import axios from 'axios';

class ListContainer extends Component {
    state = {
        info: []
    }

    componentDidMount(){
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
            console.log(res.data.results)
            const info = res.data.results;

            this.setState({
                info
            })
        })
        .catch(console.log)
    }

    render() {
        const { info } = this.state;
        return (
            <>
                <List datos={ info } />
            </>
        );
    }
}

export default ListContainer;