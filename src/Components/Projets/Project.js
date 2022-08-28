import React, { Component } from 'react'
import { authorsText } from "../../data/projectsData";
export default class Project extends Component {
      
    state = {
        showInfo: false,
      };
    
      updateShowInfo = () => {
        this.setState({ showInfo: !this.state.showInfo });
      };
    
      handleKeyPress = (event) => {
        if (event.key === "Escape") {
          this.setState({ showInfo: false });
        }
      }
    
      render() {
        let { name, source, info, icons, authors } = this.props.item;
        return (
          <div className={"project"} tabIndex={-1} onKeyDown={this.handleKeyPress}>
            <div className="logo">
              {icons.map((icon) => (
                <img src={icon} alt="" className="languageLogo" key={icon} />
              ))}
            </div>
            <h3>{name}</h3>
            <span className="info" onClick={this.updateShowInfo}>
              <i className="fa fa-plus-circle"></i>
            </span>
    
            {this.state.showInfo && (
              <div className="showInfo">
                <div className="infoContent">
    
                  <h3 className='name'>{name}</h3>
    
                  <div className="authors">
                    <p className="author">
                      {authors.length < 2 ? authorsText["singular"] : authorsText["plural"]} :
                    </p>
                    {authors.map((author) => (
                      <p className="author" key={author}>{author}</p>
                    ))}
                  </div>
    
                  <div className="text">
                    <p>{info}</p>
                  </div>
    
                  <div className="sourceCode">
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="sourceButton"
                      target="blank"
                    >
                      Code Source
                    </a>
                  </div>
    
                  <button className="exitButton" onClick={this.updateShowInfo}>
                    <i
                      className="fa fa-window-close"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      }
}
