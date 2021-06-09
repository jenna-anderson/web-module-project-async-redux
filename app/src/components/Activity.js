import React, { useEffect } from 'react';
import { getActivity } from '../actions';
import { connect } from 'react-redux';

const Fact = (props) => {
    const { activity, isFetching, error } = props;

    useEffect(() => {
        props.dispatch(getActivity());
    },[]);

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
                <h2>Try this: {activity.activity}</h2>
                <p>Type: {activity.type}</p>
                <p>Number of People Needed: {activity.participants}</p>
                <p>Price: ${activity.price}</p>
                <button onClick={handleClick}>Get Unbored</button>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        activity: state.activity,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Fact);