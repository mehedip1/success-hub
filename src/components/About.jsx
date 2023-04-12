import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Text from './Text';



const About = () => {
   const texts = useLoaderData ();
    
    return (
        <div>
          <div>
            {
                texts.map(text => <Text
                key={text.id}
                text={text}></Text>)
            }
          </div>
       </div>
           
    );
};

export default About;
