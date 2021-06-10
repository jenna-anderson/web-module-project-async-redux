import React, { useEffect } from 'react';
import { getActivity } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';


// const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

const Activity = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2%;

    button {
        border: none;
        padding: 2%;
        margin: 1%;
        background-color: #282c34;
        color: white;
        font-size: calc(10px + 2vmin);
        font-weight: bold;
    }
`;

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
        // <Container>
            <Activity>
                <h2>{activity.activity}</h2>
                <p>Type: {activity.type}</p>
                <p>Number of People Needed: {activity.participants}</p>
                <p>Price on a scale from 0 to 1: {activity.price}</p>
                <button onClick={handleClick}>Get Unbored</button>
            </Activity>
        // </Container>
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