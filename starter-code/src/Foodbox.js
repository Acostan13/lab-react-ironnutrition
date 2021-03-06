import React, { Component } from 'react';

class Foodbox extends Component {

    state = {
        quantity: 0
    }

    handleQuantityChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            quantity: e.target.value
        })
    }

    render() {
        //console.log(this.state)
        return (
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.image} alt='hi'/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br />
                    <small>{this.props.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      onChange ={this.handleQuantityChange}
                    />
                  </div>
                  <div className="control">
                    <button onClick = {() => this.props.addToList(this.props.name, this.props.calories,this.state.quantity)} className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
        </div>
        
        );
    }
}

export default Foodbox;