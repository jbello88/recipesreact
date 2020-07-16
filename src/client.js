/* import * as contentful from 'contentful';

const client = contentful.createClient(
    {
        spaceId: 'xw9ewob5itqx',
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
    }
) */

const getContent = (query) => {

    const  spaceId = 'xw9ewob5itqx';
    
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
          },
          body: JSON.stringify({
            query
          })
        }
      )
      
        .then(res => res.json());
        

        



}

export default getContent;


