import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow";
import "../components/AccomodationComponent.css";
import Dropdown from "./Dropdown";
import { library } from "@fortawesome/fontawesome-svg-core";
import "../components/Slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import RatingStars from "./RatingStars";

function AccomodationComponent({ lodgingId }) {
  const [data, setData] = useState();
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      // Par contre tu dois me déco sinon je vais te faire des requêtes à l'infini
      // hahah
      // je vais foutre le zbeul
      // Déco moi sinon je vais tout casser
      // je vais tout casser mouhahahahah
      try {
        const response = await fetch("../Accomodations.json");
        const jsonData = await response.json();
        if (jsonData.length) {
          setData(jsonData.find((item) => item.id === lodgingId));
        }
      } catch (error) {
        console.log(error, "error");
      }
    };

    if (lodgingId) {
      fetchData();
    }
  }, [lodgingId]);

  return (
    <div>
      {data && (
        <div>
          <div>
            {/* Slide show */}
            <Slideshow pictures={data.pictures} />
          </div>
          {/* User info */}
          <div className="info_wrapper">
            <div className="lodging_info">
              <h1>{data?.title}</h1>
              <h2>{data?.location}</h2>
            </div>

            <div className="host_info">
              <span className="host_name">{data?.host.name}</span>
              <img
                src={data?.host.picture}
                alt="host picture"
                className="host_pic"
              />
            </div>
          </div>
          <div className="tags_rating_wrapper">
            <div className="lodging_tags">
              {data.tags.map((tag) => {
                return (
                  <span key={tag} className="lodging_tag">
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* Rating Element */}
            <RatingStars rating={data.rating} max={5} />
          </div>
          {/* Accomodation info */}
          <div className="dropdowns_wrapper">

            <div className="dropdown_sizing">
            <Dropdown
              title="Description"
              content={data.description}
              id={data.id}
            />
            

            </div>
            <div className="dropdown_sizing">
            <Dropdown
              title="Équipements"
              content={data.equipments.map((equipment) => {
                return <li className="equipement_list">{equipment}</li>;
              })}
              id={data.id}
            />

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default AccomodationComponent;
