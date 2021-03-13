import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TeamCard = (props) => {
    const {idTeam, strTeam, strSport, strTeamBadge} = props.team;
    return (
        <div className="col-md-4 ">
            <div className="text-center bg-white mb-4 rounded p-3">
            <img className="w-50" src={strTeamBadge} alt={strTeam}/>
            <h3>{strTeam}</h3>
            <p><small>Sports Type: {strSport}</small></p>
            <Link to={`/details/${idTeam}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </div>

        </div>
    );
};

export default TeamCard;