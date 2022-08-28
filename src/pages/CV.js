import React, { Component } from 'react'
import Sidebar from '../Components/Sidebar'

import frFlag from "../media/fr.svg";
import ukFlag from "../media/uk.svg";
import javaLogo from "../media/java.svg";
import pythonLogo from "../media/python.svg";
import cLogo from "../media/c.svg";
import ocamlLogo from "../media/ocaml.svg";
import mipsLogo from "../media/mips.svg";
import haskellLogo from "../media/haskell.svg";
import cplusplusLogo from "../media/c++.svg";
import bashLogo from "../media/bash.svg";
import reactLogo from "../media/react.svg";
import jsLogo from "../media/js.svg";
import photo from "../media/photo.png";
import Section from "../Components/Text/Section";
import Subsection from "../Components/Text/Subsection";
import Education from "../Components/CV/Education";
import Degree from "../Components/CV/Degree";
import Job from "../Components/CV/Job";
import Hobby from "../Components/CV/Hobby";
import Skills from "../Components/CV/Skills";

export default class CV extends Component {
  render() {
    return (
        <div className="cv">
            <Sidebar/>
            <div className="cvContent">
              <div className="title">
                <img src={photo} alt="" className="photo"></img>
                <h1 className="name">Adan Bougherara</h1>
                <div className="button">
                  <a href="../media/CV.pdf" target="_blank">Télécharger CV</a>
                </div>
              </div> 
              <Section
                title="Date de naissance"
                content={<p>17/03/1998 (24 ans)</p>}
              />
              <Section
                title="Compétences"
                content={
                <ul className="list">
                  <li>
                    <Subsection
                      title="Langues parlées"
                      content={
                      <ul className="list">
                        <li>
                          <Skills
                            field="Français"
                            level="Niveau C2"
                            logo={frFlag}
                          />
                        </li>
                        <li>
                          <Skills
                            field="Anglais"
                            level="Niveau B2"
                            logo={ukFlag}
                          />
                        </li>
                      </ul>
                      }
                    />
                  </li>
                  <li>
                    <Subsection
                      title="Langages de programmation"
                      content={
                      <ul className="list">
                        <li>
                          <Skills
                            field="Java"
                            level="Avancé"
                            logo={javaLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="Python"
                            level="Avancé"
                            logo={pythonLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="C"
                            level="Intermédiaire"
                            logo={cLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="OCaml"
                            level="Intermédiaire"
                            logo={ocamlLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="MIPS"
                            level="Intermédiaire"
                            logo={mipsLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="Haskell"
                            level="Intermédiaire"
                            logo={haskellLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="JavaScript"
                            level="Intermédiaire"
                            logo={jsLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="React"
                            level="Intermédiaire"
                            logo={reactLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="C++"
                            level="Notions"
                            logo={cplusplusLogo}
                          />
                        </li>
                        <li>
                          <Skills
                            field="Bash"
                            level="Notions"
                            logo={bashLogo}
                          />
                        </li>
                      </ul>
                      }
                    />
                  </li>    
                </ul>
                }
              />
              <Section
                title="Diplômes"
                content={
                  <ul className="list">
                    <li>
                      <Degree
                        year="2021"
                        degree="Licence d'informatique"
                        honours="Mention AB"
                      />
                    </li>
                    <li>
                      <Degree
                        year="2016"
                        degree="Baccalauréat Série S (spécialité mathématiques)"
                        honours="Mention B"
                      />
                    </li>
                  </ul>
                }
              />
              <Section 
                title="Formation"
                content={
                  <ul className="list">
                    <li>
                      <Education
                        date="2021-2022"
                        cursus="M1 informatique - Parcours STL"
                        school="Sorbonne Université (Jussieu), Paris"
                      />
                    </li>
                    <li>
                      <Education
                        date="2017-2021"
                        cursus="Licence - Informatique"
                        school="Sorbonne Université (Jussieu), Paris"
                      />
                    </li>
                    <li>
                      <Education
                        date="2016-2017"
                        cursus="CPGE - MPSI"
                        school="Lycée Albert Schweitzer, Le Raincy"
                      />
                    </li>
                    <li>
                      <Education
                        date="2013-2016"
                        cursus=""
                        school="Lycée Jean Zay, Aulnay-Sous-Bois"
                      />
                    </li>

                  </ul>
                }
              />
              <Section
                title="Expérience professionnelle"
                content={
                  <ul className="list">
                    <li>
                      <Job
                        duration="Juillet 2019"
                        job="Contractuel"
                        employer="Marie du XIVe arrondissement"
                        location="Paris"
                        task="Affaires Générales - Élections"
                      />
                    </li>
                    <li>
                      <Job
                        duration="Juillet 2018"
                        job="Contractuel"
                        employer="Marie du XIVe arrondissement"
                        location="Paris"
                        task="État-Civil - Traitement numérique d'actes"
                      />
                    </li>
                  </ul>
                }
              />
              <Section
                title="Centres d'interêts"
                content={
                  <ul className="list">
                    <li>
                      <Hobby 
                        name="Passion pour les jeux vidéos"
                        content=""
                      />
                    </li>
                    <li>
                      <Hobby 
                        name="Basketball - "
                        content="Inscrit au Blanc Mesnil Sport Basketball pendant 6 ans"
                      />
                    </li>
                  </ul>
                }
              />
            </div>
        </div>
    )
  }
}

