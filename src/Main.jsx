import getContent from "./client";
import React, {useState, useEffect} from 'react';
import MainCard from "./MainCard";


const query = `{
    recipeCollection {
      items {
        sys {
          id
        }
        title
        image {
          url
        }
      }
    }
  }`;


function Main({setRoute}) {


    console.log("Main rendering");
    console.log(JSON.stringify({query}));
    const [recipes , setRecipes ] = useState([]);

    useEffect(() => {
        console.log("useEffects");
        getContent(query)
       
        .then((d) => d.data["recipeCollection"].items)
        .then((d) =>{console.log(d); setRecipes(d);})
        .catch((e) => console.log(e));
    }, [])   

    return (
    <div className="container-fluid">
      <div className="row">
          <h1 className="title">Recipes</h1>
      </div>
      <div className="row cards">
          {recipes.map((r) => <MainCard key={r.sys.id} {...r} clickHandler={setRoute} />)}
      </div>
    </div>);


}
   

export default Main

