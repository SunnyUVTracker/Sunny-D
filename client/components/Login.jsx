import React, { useState } from 'react';
import {
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	Avatar,
} from '@material-ui/core';
import logo from '../../images/logo.png';

const styles = {
	paper: {
		marginTop: '8px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%',
		marginTop: '3px',
	},
	submit: {
		margin: '3px 0 2px',
	},
};

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSigningUp, setIsSigningUp] = useState(false); // Track whether user is signing up or not
	const [name, setName] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();
		const body = JSON.stringify({
			email,
			password
		})
		fetch('/api/login', { method: 'POST', body })
	};

	const handleSignUp = (event) => {
		event.preventDefault();
		const body = JSON.stringify({
			email,
			password,
			name
		})
		fetch('/api/signup', { method: 'POST', body })
	};

	const handleSignUpClick = () => {
		setIsSigningUp(true); // Display sign up form on click
	};

	const handleCancelClick = () => {
		setIsSigningUp(false); // Display login form on cancel click
	};

	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<CssBaseline />
			<div style={styles.paper}>
				<Typography component="h1" variant="h5">
					{isSigningUp ? 'Sign up' : 'Sign in'}
				</Typography>
				{isSigningUp ? (
					<form style={styles.form} onSubmit={handleSignUp}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="name"
							label="Name"
							name="name"
							autoComplete="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="new-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							style={styles.submit}
						>
							Sign up
						</Button>
						<Grid container>
							<Grid item>
								<Link href="#" variant="body2" onClick={handleCancelClick}>
									{'Cancel'}
								</Link>
							</Grid>
						</Grid>
					</form>
				) : (
					<form style={styles.form} onSubmit={handleLogin}>
						<TextField
							variant="outlined"

							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							id="password"
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							style={styles.submit}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2" onClick={handleSignUpClick}>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</form>
				)}
			</div>
		</div>
	);
};

export default Login;
