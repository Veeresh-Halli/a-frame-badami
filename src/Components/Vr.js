import { React } from "react";
import "./style.css";
import badamiImage from "./360badami.jpg";

function VRComponent() {
  return (
    <>
      <a-scene>
        <a-assets>
          {/* Images. */}
          <img id="city" src={badamiImage} alt="img1" />
          <img
            id="city-thumb"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg"
            alt="img2"
          />
          <img
            id="cubes"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg"
            alt="img3"
          />
          <img
            id="cubes-thumb"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg"
            alt="img4"
          />
          <img
            id="sechelt"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
            alt="img5"
          />
          <img
            id="sechelt-thumb"
            src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg"
            alt="img6"
          />
        </a-assets>
        <a-sky id="image-360" radius="10" src="#city"></a-sky>
        <a-entity
          class="link"
          geometry="primitive: plane;"
          material="src: #city-thumb"
          position="2 2 -3"
          event-set__mouseenter="scale: 1.2 1.2 1"
          event-set__mouseleave="scale: 1 1 1"
          event-set__click="_target: #image-360; _delay: 300; material.src: #city"
        ></a-entity>
        <a-entity
          class="link"
          geometry="primitive: plane;"
          material="src: #cubes-thumb"
          position="0 2 -3"
          event-set__mouseenter="scale: 1.2 1.2 1"
          event-set__mouseleave="scale: 1 1 1"
          event-set__click="_target: #image-360; _delay: 300; material.src: #cubes"
        ></a-entity>
        <a-entity
          class="link"
          geometry="primitive: plane;"
          material="src: #sechelt-thumb"
          position="-2 2 -3"
          event-set__mouseenter="scale: 1.2 1.2 1"
          event-set__mouseleave="scale: 1 1 1"
          event-set__click="_target: #image-360; _delay: 300; material.src: #sechelt"
        ></a-entity>
        {/* <a-entity
          id="box"
          geometry="primitive: box"
          material="color: black"
          position="0 3 -10"
          rotation="0 45 45"
          text="value: Hello, World;color:white"
        ></a-entity> */}

        <a-camera>
          <a-cursor
            id="cursor"
            animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
          ></a-cursor>
        </a-camera>
      </a-scene>
    </>
  );
}

export default VRComponent;
