'use client'
import { useState } from "react";
import style from './comments-form.module.css'

const fetchPublicComment = (body) => {
  const options = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  };
  

  fetch('https://administrador.inverbots.com/wp-json/wp/v2/comment-post ', options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`La solicitud falló con estado ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      console.log('Respuesta exitosa:', data);
      location.reload()
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
}


export default function CommentsForm({slug}){

  const [formData, setFormData] = useState({
    slug: slug,
    name: '',
    email: '',
    comment: '',
    bot: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { slug, name, email, comment, bot } = formData;
    if(bot){
      return
    }
    console.log(formData)
    fetchPublicComment(formData);
    setBotonDeshabilitado(true);

    if (!name || !email || !comment) {
      setErrors({
        name: name ? '' : 'El nombre es obligatorio',
        email: email ? '' : 'El correo es obligatorio',
        comment: comment ? '' : 'El comentario es obligatorio',
      });
      setBotonDeshabilitado(false);
      return;
    }
  };

  const { name, email, comment } = formData;
  


  return (
    <>
      <form onSubmit={handleSubmit} className={style.form_content}>
      <h2 className={style.form_comment}>Quiero dejar un comentario</h2>
        <div className={style.info_section}>
          <div className={style.name}>
            <label className={style.label} htmlFor="name">Nombre:</label>
            <input
              className={style.form__input}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <span className={style.error} >{errors.name}</span>
          </div>
          <div className={style.email}>
            <label htmlFor="email" className={style.label}>Correo:</label>
            <input
            className={style.form__input} 
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <span className={style.error}>{errors.email}</span>
          </div>
        </div>

        <div className={style.textarea}>
          <label htmlFor="comment" className={style.label}>Comentario:</label>
          <textarea
            className={style.form_textarea}  
            id="comment"
            name="comment"
            value={comment}
            onChange={handleInputChange}
          />
          <span className={style.error}>{errors.comment}</span>
        </div>

        <input
            className={style.hidden}
            type="text"
            id="honeypop"
            name="bot"
            value=''
            onChange={handleInputChange}
          />

        <button 
          type="submit" 
          className={style.form_susbmit} 
          disabled={botonDeshabilitado}>
            Enviar Comentario
        </button>
      </form>
    </>
  );
};

