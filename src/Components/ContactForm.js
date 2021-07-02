import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts/operations';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const updateName = e => {
    setName(e.target.value);
  };

  const updateNumber = e => {
    setNumber(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));

    // onAddContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <div>
      <Typography component="h1" variant="h5">
        Create a new contact
      </Typography>
      <form action="submit" onSubmit={onHandleSubmit}>
        <label htmlFor="name">
          <TextField
            label="Name"
            margin="normal"
            required
            fullWidth
            id="name-input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder="text only"
            onChange={updateName}
            value={name}
          />
        </label>
        <label htmlFor="number">
          <TextField
            label="Number"
            margin="normal"
            required
            fullWidth
            id="tel-input"
            type="tel"
            name="number"
            pattern="^[ 0-9]+$"
            onChange={updateNumber}
            value={number}
            placeholder="numbers only"
          />
        </label>
        <Button type="submit" fullWidth variant="contained" color="secondary">
          Add contact
        </Button>
      </form>
    </div>
  );
};

export default Form;

// class Form extends Component {
// static propTypes = {
//   addContact: PropTypes.func,
// };

//   state = {
//     name: '',
//     number: '',
//     id: '',
//   };

//   onHandleChange = e => {
//     const { value, name } = e.target;
//     this.setState({ [name]: value });
//   };

// onHandleSubmit = e => {
//   e.preventDefault();

//   const refs = {
//     name: document.getElementById('name-input'),
//     tel: document.getElementById('tel-input'),
//   };

//   this.props.onAddContact(this.state);

//   refs.name.value = '';
//   refs.tel.value = '';
// };

//   render() {
//     return (
//       <div>
//         <Typography component="h1" variant="h5">
//           Create a new contact
//         </Typography>
//         <form action="submit" onSubmit={this.onHandleSubmit}>
//           <label htmlFor="name">
//             <TextField
//               label="Name"
//               margin="normal"
//               required
//               fullWidth
//               id="name-input"
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               placeholder="text only"
//               onChange={this.onHandleChange}
//             />
//           </label>
//           <label htmlFor="number">
//             <TextField
//               label="Number"
//               margin="normal"
//               required
//               fullWidth
//               id="tel-input"
//               type="tel"
//               name="number"
//               pattern="^[ 0-9]+$"
//               onChange={this.onHandleChange}
//               placeholder="numbers only"
//             />
//           </label>
//           <Button type="submit" fullWidth variant="contained" color="secondary">
//             Add contact
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }
