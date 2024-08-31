import React from 'react';
import { useSelector } from 'react-redux';

function DestinationFact() {
    const selectedDestination = useSelector(
        (state) => state.destinationStore.destinationSelacted // Access using 'destinationStore'
    );

    if (selectedDestination === null || selectedDestination === undefined) {
        return <div className='text-center pt-4 text-warning mb-5'>Select a Destination</div>;
    } else {
        return (
            <div className='text-center border p-3 m-3 mb-5'>
                <h4 className='text-success'>{selectedDestination.name}</h4>
                Days Recommended: {selectedDestination.days} <br />
                Fun Fact: {selectedDestination.fact}
            </div>
        );
    }
}

export default DestinationFact;
