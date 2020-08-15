import React, { useEffect, useState } from 'react';
import PageTemplate from '../../components/PageTemplate';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialValues, setInitialValues] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        setInitialValues(categoriesWithVideos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
      <PageTemplate paddingAll={0}>

      {initialValues.length === 0 && (<div>Loading...</div>)}

      {initialValues.length >= 1 &&  
        initialValues.map((category, index) =>

          index === 0 ?
          <div key={category.id}>
          <BannerMain
            videoTitle={initialValues[0].videos[0].title}
            url={initialValues[0].videos[0].url}
            videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"} />
    
            
            <Carousel
            ignoreFirstVideo
            category={category}
            ></Carousel>
            </div> :
            
            <Carousel
            key={category.id}
            category={category}>
            </Carousel>
            
          )
        
        
      }

    </PageTemplate>
  );
}

export default Home;
