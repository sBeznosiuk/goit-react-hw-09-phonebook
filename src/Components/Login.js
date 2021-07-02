import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Login = () => {
  const dispatch = useDispatch();
  const onLogin = user => dispatch(login(user));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = e => {
    setEmail(e.target.value);
  };

  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password });

    setEmail('');
    setPassword('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email-login"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={updateEmail}
            value={email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="pass-login"
            onChange={updatePassword}
            value={password}
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;

// class Login extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ email: '', password: '' });

//     const refs = {
//       email: document.getElementById('email-login'),
//       pass: document.getElementById('pass-login'),
//     };

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
//             Sign in
//           </Typography>
//           <form noValidate onSubmit={this.handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email-login"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               onChange={this.handleChange}
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="pass-login"
//               onChange={this.handleChange}
//               autoComplete="current-password"
//             />
//             <Button type="submit" fullWidth variant="contained" color="primary">
//               Sign In
//             </Button>
//           </form>
//         </div>
//       </Container>
//       // <form action="submit" onSubmit={this.handleSubmit}>
//       //   <label htmlFor="email">
//       //     <strong>Почта</strong>
//       //     <input
//       //       type="email"
//       //       name="email"
//       //       id="email-login"
//       //       onChange={this.handleChange}
//       //     />
//       //   </label>
//       //   <label htmlFor="password">
//       //     <strong>Пароль</strong>
//       //     <input
//       //       type="password"
//       //       name="password"
//       //       id="pass-login"
//       //       onChange={this.handleChange}
//       //     />
//       //   </label>
//       //   <button type="submit">Логин</button>
//       // </form>
//     );
//   }
// }
