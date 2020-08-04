import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';

import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"} />

      {dadosIniciais.categorias.map((category, index) =>

      index === 0 ?
      <Carousel
      ignoreFirstVideo
      category={category}
      ></Carousel> :

      <Carousel category={category}>
      </Carousel>
      )}

      <Footer />
    </div>
  );
}

export default App;
