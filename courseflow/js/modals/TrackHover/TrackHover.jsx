import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    ListGroup,
    Popover,
} from 'react-bootstrap'

class TrackHover extends React.Component {
    constructor(props) {
        super(props);
        this.renderRequirements = this.renderRequirements.bind(this)
    }

    renderRequirements(track) {
        return (
            <ListGroup variant={"flush"} as={"ol"} numbered>
                {track.info.requirements.map((reqCourse, index) => (
                    <ListGroup.Item style={{listStyleType: 'circle'}} as={"li"} key={`req-${index}`}>{reqCourse}</ListGroup.Item>
                ))}
            </ListGroup>
        )
    }

    render() {
        const { school, track } = this.props

        return (
            <Popover {...this.props}>
                <Popover.Header>
                    {`${school.toUpperCase()} ${track.name}`}
                </Popover.Header>
                <Popover.Body>
                    {'info' in track ? <>
                        <Row className={'mb-1'}>
                            {'description' in track.info ? track.info.description : 'No track description available.'}
                        </Row>
                        {track.info.note && <Row className={'my-1'}> (Note: {track.info.note}) </Row>}
                        <Row className={'mt-3'}>
                            <strong>{school.toLowerCase() === 'lsa' ? 'Required:': 'Recommended:'}</strong>
                            {this.renderRequirements(track)}
                        </Row>
                    </> : 'No description available.'}
                </Popover.Body>
            </Popover>
        )
    }

}
TrackHover.propTypes = {
    school: PropTypes.string.isRequired,
    track: PropTypes.object.isRequired,
}

export default TrackHover;