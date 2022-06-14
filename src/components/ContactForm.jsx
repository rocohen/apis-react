import { useForm } from '../hooks/useForm';
import Loader from './Loader';
import Message from './Message';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: '',
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El campo "Nombre" es requerido';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" sólo acepta letras y espacios en blanco'
  }

  if (!form.email.trim()) {
    errors.email = 'El campo "Email" es requerido';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "Email" debe ser válido';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El campo "Asunto a tratar" es requerido';
  }

  if (!form.comments.trim()) {
    errors.comments = 'El campo "Comentarios" es requerido';
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = 'El campo "Comentarios" no debe exceder los 255 caracteres';
  }

  return errors;
};

let styles = {
  fontWeight: 'bold',
  color: '#dc3545',
  display: 'block',
  marginBottom: '1rem',
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Escribí tu nombre'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <small style={styles}>{errors.name}</small>}
        <input
          type='email'
          name='email'
          placeholder='Ingresá tu email'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <small style={styles}>{errors.email}</small>}
        <input
          type='text'
          name='subject'
          placeholder='Asunto a tratar'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
        />
        {errors.subject && <small style={styles}>{errors.subject}</small>}
        <textarea
          name='comments'
          cols='50'
          rows='5'
          placeholder='Escribí tus comentarios'
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <small style={styles}>{errors.comments}</small>}
        <input
          type='submit'
          value={loading ? 'Enviando...' : 'Enviar'}
        />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg='Los datos fueron sido enviados' bgColor='#198754' />
      )}
    </div>
  );
};

export default ContactForm;
