class Track extends React.Compponent {
  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-Action">+</button>;
    } else {
      return <button className="Track-Action">-</button>;
    }
  }
  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{/*<!-- track name will go here -->*/}</h3>
        {/* <p>{<!-- track artist will go here--> | <!-- track album will go here -->}</p> */}
      </div>
      <button className="Track-action">
        {/*<!-- + or - will go here -->*/}
      </button>
    </div>;
  }
}

export default Track;