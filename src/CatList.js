import { Component } from "react";

class CatList extends Component {
  render() {
    return (
      <>
        {this.props.catData.map((cat) => {
          return (
            <ul>
              <li>{cat.name}</li>
              <li>{cat.type}</li>
              <li>{cat.legs}</li>
              <li>{cat.colour}</li>
            </ul>
          );
        })}
      </>
    );
  }
}

export default CatList;
