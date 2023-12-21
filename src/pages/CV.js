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
  calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  render() {
    const age = this.calculateAge('1998-03-17');
    return (
      <div className="cv">
        <Sidebar />
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
            content={<p>17/03/1998 ({age} ans)</p>}
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
                            level="Natif"
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
                    year="2023"
                    degree={
                      <a
                        href="https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-stl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Master Informatique Parcours STL</strong>
                      </a>
                    }
                    honours="Mention Bien"
                  />
                </li>
                <li>
                  <Degree
                    year="2021"
                    degree={
                      <a
                        href="https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licences-generales-l2-l3/licence-dinformatique"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Licence Informatique</strong>
                      </a>
                    }
                    honours="Mention Assez Bien"
                  />
                </li>
                <li>
                  <Degree
                    year="2016"
                    degree={
                      <a
                        href="https://www.lycjzayaulnay.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Baccalauréat Série S (Section Européenne Anglais)</strong>
                      </a>
                    }
                    honours="Mention Bien"
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
                    date="2021-2023"
                    cursus={
                      <a
                        href="https://sciences.sorbonne-universite.fr/formation-sciences/masters/master-informatique/parcours-stl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Master Informatique Parcours STL</strong>
                      </a>
                    }
                    school="Sorbonne Université (Jussieu), Paris"
                  />
                </li>
                <li>
                  <Education
                    date="2017-2021"
                    cursus={
                      <a
                        href="https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licences-generales-l2-l3/licence-dinformatique"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Licence Informatique</strong>
                      </a>
                    }
                    school="Sorbonne Université (Jussieu), Paris"
                  />
                </li>
                <li>
                  <Education
                    date="2016-2017"
                    cursus={
                      <a
                        href="https://lyceeschweitzer.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>CPGE - MPSI</strong>
                      </a>
                    }
                    school="Lycée Albert Schweitzer, Le Raincy"
                  />
                </li>
                <li>
                  <Education
                    date="2013-2016"
                    school={
                      <a
                        href="https://www.lycjzayaulnay.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Lycée Jean Zay</strong>, Aulnay-Sous-Bois
                      </a>
                    }
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
                    duration="En cours"
                    job="CDI"
                    employer={
                      <a
                        href="https://almaviacx.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Almavia CX</strong>
                      </a>
                    }
                    location="Paris"
                    task={
                      <a
                        href="https://almaviacx.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Développeur logiciel (CRM E-DEAL)</strong>
                      </a>
                    }
                  />
                </li>
                <li>
                  <Job
                    duration="Févr. 2023- Août 2023"
                    job="Stage"
                    employer={
                      <a
                        href="https://almaviacx.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Almavia CX</strong>
                      </a>
                    }
                    location="Paris"
                    task={
                      <a
                        href="https://almaviacx.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Développeur logiciel (CRM E-DEAL)</strong>
                      </a>
                    }
                  />
                </li>
                <li>
                  <Job
                    duration="Juillet 2019"
                    job="Stage"
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

