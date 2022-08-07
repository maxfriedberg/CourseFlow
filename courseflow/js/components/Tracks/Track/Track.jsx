import React from 'react';
import PropTypes from 'prop-types';
import { Button, OverlayTrigger } from 'react-bootstrap'
import TrackHover from '../../../modals/TrackHover';

class Track extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { school, track, handleTrackSelection } = this.props;

        return (
            <OverlayTrigger
                placement="right"
                delay={{show: 600, hide: 300}}
                overlay={<TrackHover school={school} track={track} />}
            >
                <Button className='my-1 w-100'
                        key={`${school}-${track.name}`}
                        onClick={handleTrackSelection(school, track)}
                >
                    {track.name}
                </Button>
            </OverlayTrigger>
        )
    }
}
Track.propTypes = {
    school: PropTypes.string.isRequired,
    track: PropTypes.object.isRequired,
    handleTrackSelection: PropTypes.func.isRequired
}

export default Track