import React, { useState, useEffect } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: ''
  }

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
    ? "http://localhost:8080/categorias"
    : 'https://astronomy-flix.herokuapp.com/categorias';

    fetch(URL).then(async (response) => {
      const jsonResponse = await response.json();
      setCategories([
        ...jsonResponse,
      ]);
    });
  }, []);


    return (
      <PageTemplate>
        <h1>Cadastro de Categoria: {values.title}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([
            ...categories, values
          ]);

          clearForm();
        }}>
          <FormField
          label="Nome da Categoria"
          type="text"
          value={values.title}
          name="title"
          onChange={handleChange}
          />

          <FormField 
          label="Descrição"
          type="textarea"
          value={values.description}
          name="description"
          onChange={handleChange} />

          <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
          />

          <Link to="/" className="ButtonLink">Cadastrar</Link>
        </form>

        <ul>
          {categories.map((category) => {
            return(
              <li key={`${category}`}>
                {category.title}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Home
        </Link>
      </PageTemplate>
    )
  }

  export default CadastroCategoria;