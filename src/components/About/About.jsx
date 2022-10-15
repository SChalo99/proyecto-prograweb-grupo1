import React from "react";
import "./About.css";


const About=()=> {
  return (
    <div className="about">
      <h1>CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!</h1>
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
          src={"https://www.youtube.com/embed/znx_jCKLwXw"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/_Cg-MNGuYWY"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/FTxIJgx0pxU"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0cPMl5OsKSY"
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