import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchData } from "../fetching/fetchingActions";

function Fetching({ mapData, mapFatch }) {

    useEffect( () => {
        mapFatch()
    }, [])

    return mapData.loading ? (
        <h2>Loading</h2>
    ) : mapData.error ? (
        <h2>{mapData.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    mapData && mapData.fetch && mapData.fetch.map(data => <p>{data.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mapData: state.fetchingReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mapFatch: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Fetching)
