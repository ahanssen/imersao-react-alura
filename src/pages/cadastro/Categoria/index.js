import React, { useState, useEffect } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

    fetch(URL).then(async (response) => {
      const jsonResponse = await response.json();
      setCategories([
        ...jsonResponse
      ]);
    });
  }, []);


    return (
      <PageTemplate>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([
            ...categories, values
          ]);

          setValues(initialValues);
        }}>
          <FormField
          label="Nome da Categoria"
          type="text"
          value={values.name}
          name="name"
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
                {category.name}
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