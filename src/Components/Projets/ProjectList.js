import React, { Component } from 'react'
import { projectsData } from "../../data/projectsData";
import Project from "./Project";
export default class ProjectList extends Component {
    
    state = {
        projects: projectsData,
        radios: [
          { id: 0, value: "All" },
          { id: 1, value: "Haskell" },
          { id: 2, value: "Javascript" },
          { id: 3, value: "React" },
          { id: 4, value: "Python" },
          { id: 5, value: "Java" },
          { id: 6, value: "C++" },
          { id: 7, value: "OCaml" },
          { id: 8, value: "MIPS" },
        ],
        selectedRadio: "All",
      };

      updateRadio = (e) => {
        let currentRadio = e.target.value;
        this.setState({ selectedRadio: currentRadio });
      };

      render() {
        let { projects, radios, selectedRadio } = this.state;
        return (
          <div className="projectsListContent">
            {
              <ul className="radioBanner">
                {radios
                  .sort((radio1, radio2) => {
                    return radio1.value.localeCompare(radio2.value);
                  })
                  .map((radio) => {
                    return (
                      <li key={radio.id}>
                        <input
                          type="radio"
                          name="radio"
                          checked={radio.value === selectedRadio}
                          value={radio.value}
                          id={radio.value}
                          onChange={this.updateRadio}
                        />
                        <label htmlFor={radio.value}>
                          {radio.value === "All"
                            ? "All"
                            : radio.value}
                        </label>
                      </li>
                    );
                  })}
              </ul>
            }
            <div className="projects">
              {projects
                .filter(
                  (project) =>
                    project.languages.includes(selectedRadio) ||
                    selectedRadio === "All"
                )
                .sort((project1, project2) => {
                  return (
                    project1.name
                      .localeCompare(project2.name)
                  );
                })
                .map((project) => {
                  return (
                    <Project
                      key={project.id}
                      item={project}
                    />
                  );
                })}
            </div>
          </div>
        );
      }
}
