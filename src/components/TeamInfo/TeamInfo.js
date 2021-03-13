import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import maleTeam from "../../images/male.png";
import femaleTeam from "../../images/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faYoutubeSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarTimes,
  faFlag,
  faMars,
  faVenus,
  faFutbol,
} from "@fortawesome/free-solid-svg-icons";

const TeamInfo = () => {
  const { teamId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, [teamId]);
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strTeamBadge,
    strDescriptionEN,
    strDescriptionES,
    strFacebook,
    strTwitter,
    strYoutube,
  } = details;
  let teamImage, genderIcon;
  if (strGender === "Male") {
    teamImage = maleTeam;
    genderIcon = faMars;
  } else if (strGender === "Female") {
    teamImage = femaleTeam;
    genderIcon = faVenus;
  }
  return (
    <>
      <div className="container banner-image">
        <div className="team-badge">
          <img className="w-100 mt-5" src={strTeamBadge} alt={strTeam} />
        </div>
      </div>
      <div className="container details-bg">
        <div className="row bg-primary my-3 rounded mx-5">
          <div className="col-md-7 text-white p-3">
            <h2><strong>{strTeam}</strong></h2>
            <p>
              <FontAwesomeIcon icon={faCalendarTimes} /> Founded: <strong>{intFormedYear}</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faFlag} /> Country: <strong>{strCountry}</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faFutbol} /> Sport Type: <strong>{strSport}</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={genderIcon} /> Gender: <strong>{strGender}</strong>
            </p>
          </div>
          <div className="col-md-5 p-3">
            <img className="w-100" src={teamImage} alt="" />
          </div>
        </div>
        <div className="text-white mx-5 text-justify">
          <p>{strDescriptionEN}</p>
          <p className="mt-5">{strDescriptionES}</p>
        </div>
        <div className="text-center">
          <h2 className="social-icon">
            <a className="text-primary" href={`https://${strFacebook}`}>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a className="text-info" href={`https://${strTwitter}`}>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a className="text-danger" href={`https://${strYoutube}`}>
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default TeamInfo;
