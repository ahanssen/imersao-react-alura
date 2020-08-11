import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <PageTemplate>
        <h1>Cadastro de Vídeo</h1>

        <form>

        </form>

        <Link to="/cadastro/Categoria">
            Cadastrar Categoria
        </Link>
      </PageTemplate>
    )
  }

  export default CadastroVideo;