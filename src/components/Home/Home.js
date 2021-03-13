import React, { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <>
      <div className="container banner-image d-flex align-items-center justify-content-center">
        <div>
          <h1 className="text-white">The Team Shadow</h1>
        </div>
      </div>

      <div className="container bg-primary">
        <div className="row px-5 py-4">
          {teams.slice(0, 15).map((team) => (
            <TeamCard key={team.idTeam} team={team}></TeamCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
