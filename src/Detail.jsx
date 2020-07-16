import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import getContent from "./client";
import marked from 'marked';
import Ingredient from "./Ingredient"
import './App.css';


const query = (id) =>  `
{
    recipe(id: "${id}") {
      title
      ingredients: ingredientsCollection {
        items {
          description
          quantity
        }
      }
      image {
        url
      }
      instructions
    }
  }
  `;


function Detail({setRoute}) {
  let { id } = useParams();
  console.log(id +"   the id of the detail");

  const localClickHandler = (e) => {
    setRoute();
  }
  
  const [item, setItem] = useState();

  useEffect(() => {
    console.log("useEffects");
    getContent(query(id))
    .then((d) =>{console.log(d.data.recipe); setItem(d.data.recipe);})
    .catch((e) => console.log(e));
}, [id])

if (!item)  return <p>loading </p>;
  
 
  return (
    <div className="container" onClick={localClickHandler}>
      <div className="row">
        <h1 className="title">{item.title}</h1>
      </div>
      <div className="row">
            <div className="col-md-6 description" dangerouslySetInnerHTML= {{__html: marked(item.instructions) }} >
            
            </div>

            <div className="col-md-6 picture">
                <img src={item.image.url} className="img-fluid"
                alt="inger Scallion Ramen" />
            </div>
        </div>

        <div className="row">
      <div className="col-12 ingredients">
        <table className="table table-striped">
          <thead>
              <tr>
                <th>amount</th>
                <th>ingredient</th>
            </tr>
          </thead>
          <tbody>

           {item.ingredients.items.map((x,i) => <Ingredient {...x} key={i}/>)} 
           </tbody>
        </table>
      </div>
    </div>
 
    </div>

    );
}

  export default Detail;