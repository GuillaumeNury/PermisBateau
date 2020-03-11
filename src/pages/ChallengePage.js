import React from "react";
import Challenge from "../components/Challenge";
import ChallengeGenerator from "../components/ChallengeGenerator";
import ChallengeStats from "../components/ChallengeStats";
import { getProposedChoices, levels } from "../data/levels";

/**
 * 
 * @param {number} levelsNumber 
 * @param {string[]} categories 
 */
const getInitialState = (levelsNumber, categories) => {
  const levelsToChallenge = levels
        .filter(lvl => categories.includes(lvl.category))
        .sort(() => Math.random() - Math.random())
        .slice(0, levelsNumber)

  return {
    levelsToChallenge,
    correctLevels: 0,
    currentLevel: 0,
    currentLevelChoices: levelsToChallenge.length ? getProposedChoices(levelsToChallenge[0]) : [],
    responseState: null,
    selectedIndex: null,
    correctIndex: null,
  }
};

export default class ChallengePage extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        ...getInitialState(0, []),
        challengeConfig: null,
      }
    }

    _applyConfig(challengeConfig) {
      const { levelsNumber, categories } = challengeConfig;

      this.setState({
        challengeConfig,
        ...getInitialState(levelsNumber, categories),
      });
    }
  
    _onResponse(level, choice, index) {
      const isCorrect = choice === level.solution
      const correctIndex = this.state.currentLevelChoices.indexOf(level.solution);
  
      this.setState({
        selectedIndex: index,
        correctIndex
      });
  
      const delay = isCorrect ? 300 : 2000
  
      setTimeout(() => this._afterResponse(isCorrect), delay)
    }
  
    _afterResponse(isCorrect) {
      const { currentLevel, levelsToChallenge } = this.state
      const nextLevel = currentLevel + 1
  
      this.setState({
        responseState: null,
        selectedIndex: null,
        correctIndex: null,
        correctLevels: this.state.correctLevels + isCorrect,
        currentLevelChoices: levelsToChallenge[nextLevel]
          ? getProposedChoices(levelsToChallenge[nextLevel])
          : [],
        currentLevel: nextLevel,
      })
    }
  
    render() {
      const {
        levelsToChallenge,
        currentLevel,
        currentLevelChoices,
        correctLevels,
        selectedIndex,
        correctIndex,
        challengeConfig,
      } = this.state

      const level = levelsToChallenge[currentLevel]
      const backgroundColor = (index) =>
        index === correctIndex
            ? "lightgreen"
            : index === selectedIndex 
            ? "orangered"
            : "";
  
      return challengeConfig
        ? (
          <div>
            <ChallengeStats
              index={currentLevel}
              correctLevels={correctLevels}
              total={levelsToChallenge.length}
            />
            {level
              ? (
                <Challenge level={level}>
                  {currentLevelChoices.map((choice, idx) => (
                    <button
                      key={idx}
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginBottom: "0.75rem",
                        width: "100%",
                        backgroundColor: backgroundColor(idx),
                      }}
                      onClick={() => this._onResponse(level, choice, idx)}
                    >
                      {choice}
                    </button>
                  ))}
                </Challenge>
              )
              : (
                <button className="button primary" onClick={() => this.setState({ challengeConfig: null })}>
                    Recommencer
                </button>
              )
          }
          </div>)
        : <ChallengeGenerator onStart={conf => this._applyConfig(conf)} />;
    }
  }