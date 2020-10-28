import { CardContent, Grid, Switch, TextField, makeStyles, Card } from '@material-ui/core'
import React,{useState} from 'react';  
import {Link} from 'react-router-dom';
import './Signup.css';

import img from '../../assets/Login.png' ;


const useStyles = makeStyles({

  root: {
    display:'flex',
    justifyContent:'center',
    marginTop:'4em' ,
    
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


function Signup() {

  const classes = useStyles()

  return (
      
      <div className={classes.root}>
      <Card className="card"  raised={true} style={{maxWidth:'70%'}}>
        <CardContent>
        <Grid container justify={"center"}>
          <Grid item lg={6} md={6} >

            <img className="image" src={img}/>
          </Grid>
          <Grid item lg={6} md={6}>
            <div class="main ">
              <p class="sign" align="center">Sign up</p>
              <form class="form1">
                  <input class="un " type="text" align="center" placeholder="Name"/>
                  <input class="un " type="text" align="center" placeholder="Email id"/>
                  <input class="un " type="text" align="center" placeholder="Phone Number"/>
                  <input class="pass" type="password" align="center" placeholder="Password"/>
                  <input class="pass" type="password" align="center" placeholder="Confirm Password"/>
                  <div><a class="submit" align="center">Sign up</a></div>
                  <p class="forgot" align="center">
                    <Link className="tag" to="/login">Login</Link>
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

export default Signup
