import { useState } from "react";
import { SocialIcon } from 'react-social-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from "react-bootstrap";


function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);
  async function getProjectsData() {
    const res = await fetch(props.URL + "projects")
    const data = await res.json()
    setProjects(data)
  }
  getProjectsData()
  // useEffect(() => {
  //   getProjectsData()
  // }, [getProjectsData])

  // //create function to make api call
  // const getProjectsData = async () => {
  //   //make api call and get response
  //   const response = await fetch(props.URL + "projects");
  //   // turn response into javascript object
  //   const data = await response.json();
  //   // set the projects state to the data
  //   setProjects(data);
  // };

  // // make an initial call for the data inside a useEffect, so it only happens once on component load
  // useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project, index) => (
      
      <Col key={index} xs={12} md={4} className="projectcards border border-primary">
        <br>
        </br>
        <h1>{project.name}</h1>
        <img className = "projectimage" src={project.image} alt="project"/>
        <h3>{project.description}</h3>
        {/* <a href={project.git}>
          <button>Github</button> */}
        {/* </a> */}
        {/* <a href={project.live}>
          <button>live site</button>
        </a>  */}
        <div>
      <SocialIcon className="icons" network="sharethis"url={project.live} label="live project"/>
      <SocialIcon className="icons" url={project.git} bgColor="#ff5a01" label="github repo"/>
      </div>
      </Col>
      
    ));
  };

  return projects ?   <Row className="align-items-center">{loaded()} </Row> : <h1>Loading...</h1>;
}

export default Projects;