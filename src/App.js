import React, { Component } from 'react';
import './App.css';
import DisplayBox from './components/DisplayBox';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import * as actionTypes from './store/actions';

import * as math from 'mathjs'; 

import { connect } from 'react-redux';


class App extends Component {
    
    constructor( props ) {
       super( props );
       
       this.state = {
         input : ""
       }
    }

    addToInput = ( val ) => {
      let state = {
        ...this.state
      },
      inputVal = this.state.input;

      this.setState({ 
        ...state,
        input : inputVal + val 
      });
    }

    equalTo = () => {
      let state = {
        ...this.state
      },
      inputVal = this.state.input;
      this.setState({
        ...state, 
        input : math.evaluate( inputVal ) 
      })
    }

    render() {
      return (
        <div className="App">
          <DisplayBox input={ this.props.ctr }/>
            <Grid item xs={12} >
              <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="full width contained button group">
                <Button color="primary"
                  onClick={ this.props.clear } >C</Button>
                <Button color="primary" 
                  onClick={ () => this.props.addTInput('%') } >%</Button>
                <Button color="primary" 
                  onClick={ () => this.props.addTInput('/') } >/</Button>
              </ButtonGroup>
              <ButtonGroup 
                fullWidth
                color="secondary" 
                variant="contained"
                aria-label="full width contained button group">
                <Button
                  onClick={ () => this.props.addTInput('7') } >7</Button>
                <Button
                  onClick={ () => this.props.addTInput('8') } >8</Button>
                <Button
                  onClick={ () => this.props.addTInput('9') } >9</Button>
                <Button color="primary"
                  onClick={ () => this.props.addTInput('*') }
                  >*</Button>
              </ButtonGroup>
              <ButtonGroup
                fullWidth
                color="secondary" 
                variant="contained"
                aria-label="full width contained button group">
                <Button
                  onClick={ () => this.props.addTInput('4') }
                  >4</Button>
                <Button
                  onClick={ () => this.props.addTInput('5') }
                  >5</Button>
                <Button
                  onClick={ () => this.props.addTInput('6') }
                  >6</Button>
                <Button color="primary"
                  onClick={ () => this.props.addTInput('-') }
                  >-</Button>
              </ButtonGroup>
              <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="full width contained button group">
                <Button color="secondary"
                  onClick={ () => this.props.addTInput('1') }
                  >1</Button>
                <Button color="secondary"
                  onClick={ () => this.props.addTInput('3') }
                  >2</Button>
                <Button color="secondary"
                  onClick={ () => this.props.addTInput('3') }
                  >3</Button>
                <Button color="primary"
                  onClick={ () => this.props.addTInput('+') }
                  >+</Button>
              </ButtonGroup>
              <ButtonGroup
                fullWidth
                variant="contained"
                aria-label="full width contained button group">
                <Button color="secondary"
                  onClick={ () => this.props.addTInput('0') }
                  >0</Button>
                <Button color="secondary"
                  onClick={ () => this.props.addTInput('.') }
                  >.</Button>
                <Button color="secondary"
                  onClick={ this.props.equalT }
                >=</Button>
              </ButtonGroup>
            </Grid>
        </div>
      );
    }
    

}


const mapStateToProps = state => {
  return {
      ctr : state.ctr.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addTInput : ( val ) => dispatch({ type : actionTypes.ADDON , val : val }),
      equalT : ( ) => dispatch({ type : actionTypes.EVAL }),
      clear : ( ) => dispatch({ type : actionTypes.CLEAR }),
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(App);
