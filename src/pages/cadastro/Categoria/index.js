import React from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
      <PageTemplate>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">
            Home
        </Link>
      </PageTemplate>
    )
  }

  export default CadastroCategoria;