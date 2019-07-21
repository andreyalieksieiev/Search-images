import React from 'react';
import axios from 'axios';

import Header from '../Header/index';
import Body from '../Body/index';

class Wrapper extends React.Component {
    state = {
        images: [],
        searchValue: '',
        loading: false
    }

    changeHandler = (event) => {
        this.setState({ searchValue: event.target.value })
    };

    clickSubmit = () => {
        const { searchValue } = this.state;
        this.setState({ loading: true })
        axios
            .get('https://app.zenserp.com/api/v2/search', {
                params : {
                    q: searchValue,
                    tbm: 'isch',
                },
                headers: {
                    'apikey': '2e3a9590-ab1f-11e9-9f90-4f8c80ba61bc'
                },
            })
            .then(response => {
                 this.setState({
                     images: response.data.image_results, 
                     loading: false 
                });
            })
            .catch(err => (
                console.log(err.response)
            ));
    };

    render() {
        const { images, loading } = this.state;
        
        return  (
            <div>
                <Header 
                    clickSubmit={this.clickSubmit}
                    changeHandler={this.changeHandler}
                />
                <Body
                    loading={loading}
                    images={images}
                />
            </div>
        );  
    }
}

export default Wrapper;