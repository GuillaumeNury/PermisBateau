import React from "react";
import { levelsByCategory } from '../data/levels';

export default class ChallengeGenerator extends React.Component {
  constructor() {
    super();

    const categories = Object.keys(levelsByCategory);

    const defaultConfig = {
      checkedCategories: categories,
      levelsNumber: 20,
    };

    this.state = {
      categories,
      ...(this._getLastState() || defaultConfig),
    };
  }

  _saveState() {
    const { checkedCategories, levelsNumber } = this.state;
    localStorage.setItem('ChallengeConfig', JSON.stringify({ checkedCategories, levelsNumber }));
  }

  _getLastState() {
    const raw = localStorage.getItem('ChallengeConfig');

    if (!raw) return null;

    return JSON.parse(raw);
  }

  _onCheckboxChange(evt, cat) {
    this.setState({
      checkedCategories: evt.target.checked
        ? [...this.state.checkedCategories, cat]
        : this.state.checkedCategories.filter(c => c !== cat)
    })
  }

  /**
   * 
   * @param {React.SyntheticEvent<HTMLSelectElement, Event>} evt 
   */
  _onSelect(evt) {
    this.setState({ levelsNumber: +evt.target.value });
  }

  _selectAll() {
    this.setState({ checkedCategories: this.state.categories });
  }

  _selectNone() {
    this.setState({ checkedCategories: [] });
  }

  _submit() {
    this._saveState();
    this.props.onStart({
      categories: this.state.checkedCategories,
      levelsNumber: this.state.levelsNumber,
    })
  }

  render() {
    const { categories, checkedCategories, levelsNumber } = this.state;

    return (
      <div className="card" style={{ padding: "2rem", margin: "2rem auto" }}>
        <div>
          <b>Catégories :</b>
          <button onClick={() => this._selectAll()}>Toutes</button>
          <button onClick={() => this._selectNone()}>Aucunes</button>
        </div>
        {categories.map(cat => (
          <div key={cat}>
            <input type="checkbox" name="categories" id={"cb-" + cat} checked={checkedCategories.includes(cat)} onChange={evt => this._onCheckboxChange(evt, cat)} />
            <label htmlFor={"cb-" + cat}>{cat}</label>
          </div>
        ))}

        <div style={{ marginTop: "3rem" }}>
          <span><b>Nombre de questions max : </b></span>
          <select value={levelsNumber} onChange={evt => this._onSelect(evt)}>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="1000">Toutes</option>
          </select>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button className="primary" onClick={() => this._submit()}>Lancer le test</button>
        </div>
      </div>
    )
  }
}
