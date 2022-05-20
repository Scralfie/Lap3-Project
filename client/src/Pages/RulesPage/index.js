import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from "react-router-dom";

export const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div class="location-path-name" data-testid="location-display">
      {location.pathname}
    </div>
  );
};

const RulesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div id="rulesPage-section">
          <h1 id="rules-heading">How to play </h1>
          <p>
            To begin, you will be asked to input your desired setting
            configuration - you will be able to pick a category, the difficulty
            of the questions and the number of questions you would like to
            answer. Once you have (picked your username) you will start to
            answer questions.
          </p>
          <ol id="rules-list">
            <li>If you get a question wrong, you need to drink</li>
            <li>
              If you lose the overall game, the other players can confer and
              create a forfeit
            </li>
            <li>
              If you are the winner, you can giver as many drinks as there are
              players
            </li>
          </ol>
          <div className="btn-container">
            <button
              id="back-btn"
              className="primary-button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
      </div>
      <LocationDisplay />
    </>
  );
};

export default RulesPage;
