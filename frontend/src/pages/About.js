import { useState } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);
  async function getAboutData() {
    const res = await fetch(props.URL + "about");
    const data = await res.json();
    setAbout(data)
  }
  getAboutData()
  // useEffect(() => {
  //   getAboutData()
  // }, [getAboutData])
  // create function to make api call
  // const getAboutData = async () => {
  //   // make api call and get response
  //   const response = await fetch(props.URL + "about");
  //   // turn response into javascript object
  //   const data = await response.json();
  //   // set the about state to the data
  //   setAbout(data);
  // };

  // // make an initial call for the data inside a useEffect, so it only happens once on component load
  // useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h1>Name: {about.name}</h1>
      <img className="headshot" src={about.headshot} alt = "profile"/>
      <h3>Bio: {about.bio}</h3>
      <h1>Education</h1>
      <img className="educationpic" src={about.educationpic[0]} alt = "profile"/>
      <img className="educationpic" src={about.educationpic[1]} alt = "profile"/>
      
    </div>
  );


  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;