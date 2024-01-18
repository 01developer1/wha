import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from './auth-forms/AuthLogin';
import AuthWrapper from './AuthWrapper';

// ================================|| LOGIN ||================================ //

const Login = () => {
/*   const [showAlert, setShowAlert] = useState(false);
   const alertStyle = {
      position: 'fixed', // Fixed position
      top: 15,          // 15px from the top
      left: '50%',      // Centered horizontally
      transform: 'translateX(-50%)', // Adjust for centering
      zIndex: 1000,     // Ensure it's above other elements
      margin: '0 auto', // Centering for smaller screens
      width: '80%',     // Responsive width
      opacity: 0.95,    // 95% opacity
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };
  
  const showDeleteAlert = () => {
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 3000);
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
  };
  
  // Call the `showDeleteAlert` function where it's supposed to be used,
  // for example in a button click handler or useEffect if it needs to be called on component mount*/
  
  return (
      <AuthWrapper>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                  <Typography variant="h3">Prijava</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthLogin />
            </Grid>
        </Grid>
    </AuthWrapper>
   );
};


export default Login;


//{showAlert && <Alert style={alertStyle} severity="success">Zaposleni uspešno izbrisan!</Alert>}