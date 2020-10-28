import { CardContent, Grid, Switch, TextField, makeStyles, Card } from '@material-ui/core'
import React,{useState} from 'react';  
import {Link} from 'react-router-dom';
import './Login.css';

import img from '../../assets/Login.png' ;


const useStyles = makeStyles({

  root: {
    display:'flex',
    justifyContent:'center',
    marginTop:'5.5em' ,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});


function Login() {

  const classes = useStyles()

  return (
      
      <div className={classes.root}>
      <Card className="card"  raised={true} style={{maxWidth:'95%'}}>
        <CardContent>
        <Grid container>
          <Grid item md={6}  >

            <img className="image" src={img}/>
          </Grid>
          <Grid item md={6}>
            <div class="main ">
              <p class="sign" align="center">Sign in</p>
              <form class="form1">
                  <input class="un " type="text" align="center" placeholder="Username"/>
                  <input class="pass" type="password" align="center" placeholder="Password"/>
                  <div><a class="submit" align="center">Sign in</a></div>
                  <p class="forgot" align="center">
                    <Link className="tag" to="/Signup">Sign Up</Link>
                  </p>
                  
                  
              </form>
            </div>
          </Grid>
        </Grid>
        </CardContent>
      </Card>
      </div>
        
      
  )
}

export default Login
