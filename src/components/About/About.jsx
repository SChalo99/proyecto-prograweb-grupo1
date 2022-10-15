import React from "react";
import "./About.css";


const About=()=> {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Hola compradores de tecnologia!</p>
      <br />
      <p>
        Texto de presentacion 1
      </p>
      <br />
      <p>
        Texto de presentacion 2
      </p>
      <br />

      <h3>Navega sobre los videos en tendencia</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/watch?v=znx_jCKLwXw&ab_channel=PCBuilder"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/watch?v=_Cg-MNGuYWY&ab_channel=PCCentric"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/watch?v=SZK04rWVIW4&ab_channel=DesignsByIFR"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3pzKY6tqf9c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;