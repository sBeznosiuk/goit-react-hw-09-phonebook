import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/operations';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Registration = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const updateName = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister({ name, email, password });

    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name-register"
            value={name}
            onChange={updateName}
            autoComplete="current-password"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email-register"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={updateEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="pass-register"
            value={password}
            onChange={updatePassword}
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(Registration);

// class Registration extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });

//     const refs = {
//       name: document.getElementById('name-register'),
//       email: document.getElementById('email-register'),
//       pass: document.getElementById('pass-register'),
//     };

//     refs.name.value = '';
//     refs.pass.value = '';
//     refs.email.value = '';
//   };

//   render() {
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div>
//           <Avatar>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <form noValidate onSubmit={this.handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="name"
//               label="Name"
//               type="text"
//               id="name-register"
//               onChange={this.handleChange}
//               autoComplete="current-password"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email-register"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               onChange={this.handleChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="pass-register"
//               onChange={this.handleChange}
//               autoComplete="current-password"
//             />
//             <Button type="submit" fullWidth variant="contained" color="primary">
//               Sign Up
//             </Button>
//           </form>
//         </div>
//       </Container>
//       // <form action="submit" onSubmit={this.handleSubmit}>
//       //   <label htmlFor="name">
//       //     <strong>Имя</strong>
//       //     <input
//       //       type="text"
//       //       name="name"
//       //       id="name-register"
//       //       onChange={this.handleChange}
//       //     />
//       //   </label>
//       //   <label htmlFor="email">
//       //     <strong>Почта</strong>
//       //     <input
//       //       type="email"
//       //       name="email"
//       //       id="email-register"
//       //       onChange={this.handleChange}
//       //     />
//       //   </label>
//       //   <label htmlFor="password">
//       //     <strong>Пароль</strong>
//       //     <input
//       //       type="password"
//       //       name="password"
//       //       id="pass-register"
//       //       onChange={this.handleChange}
//       //     />
//       //   </label>
//       //   <button type="submit">Регистрация</button>
//       // </form>
//     );
//   }
// }
