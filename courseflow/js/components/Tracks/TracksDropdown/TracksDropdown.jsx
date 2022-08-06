import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap'
import Track from '../Track';

class TracksDropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { tracks, handleTrackSelection } = this.props

        return (
            <Accordion>
                {tracks.map((schoolTracks, index) => (
                    <Accordion.Item eventKey={`${index}`} key={`${index}`} >
                        <Accordion.Header>{`CS ${schoolTracks.school.toUpperCase()}`}</Accordion.Header>
                        <Accordion.Body>
                            {schoolTracks.tracks?.map((track, index) =>
                                <Track
                                    key={index}
                                    school={schoolTracks.school}
                                    track={track}
                                    handleTrackSelection={handleTrackSelection}
                                />
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        )
    }
}

TracksDropdown.propTypes = {
    tracks: PropTypes.array.isRequired,
    handleTrackSelection: PropTypes.func.isRequired
}

export default TracksDropdown;