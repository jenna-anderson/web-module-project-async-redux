import React from 'react';
import { getActivity } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

const Fact = (props) => {
    const { activity, isFetching, error } = props;

    const handleClick = () => {
        props.dispatch(getActivity());
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching an Activity</h2>;
    }

    return(
        <div>
            <section>
                <button onClick={handleClick}>Get Unbored</button>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Fact);