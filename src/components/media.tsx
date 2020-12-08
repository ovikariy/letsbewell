
import React from 'react';
import '../assets/styles/App.css';
import { Media } from 'reactstrap';
import { MediaProps } from '../modules/types';

function MediaComponent(props: MediaProps) {
    return (
        <Media>
            <Media left className='mr-md-3'>
                <Media object className='mediaIcon' src={props.leftIcon} alt={props.leftIconAlt} />
            </Media>
            <Media body className='lead'>
                <Media heading className='h2'>
                    {props.heading}
                </Media>
                {props.body}
            </Media>
        </Media>
    );
}

export default MediaComponent;
