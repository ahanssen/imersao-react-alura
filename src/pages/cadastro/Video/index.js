import React, { useEffect, useState } from 'react';
import PageTemplate from '../../../components/PageTemplate';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({title}) => title);
  const initialValues = {
    title: '',
    url: '',
    categoryId: ''
  }
  const { handleChange, values } = useForm(initialValues);

  useEffect(() => {
    categoriesRepository
    .getAllCategories()
    .then((loadedCategories) => {
      setCategories(loadedCategories);
    });
  }, []);

  return (
    <PageTemplate>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={function handleSubmit(event){
        event.preventDefault();

        const chosenCategory = categories.find((category) => {
          return category.title === values.category;
        });

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        }).then(() => {
          history.push('/');
        }).catch((error) => {
          console.log(error);
        });
      }}>
        <FormField
          label="Título do vídeo"
          type="text"
          value={values.title}
          name="title"
          onChange={handleChange}
          />

        <FormField
          label="URL"
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
          />

        <FormField
          label="Categoria"
          value={values.category}
          name="category"
          onChange={handleChange}
          suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>
      </form>

      <br />
      <br />
      
      <Link to="/cadastro/Categoria">
          Cadastrar Categoria
      </Link>
      <br />
      <br />
      
    </PageTemplate>
  );
}
  export default CadastroVideo;