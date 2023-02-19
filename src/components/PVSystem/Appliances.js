import React from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Button} from '@mui/material';
import { IconButton, InputAdornment } from '@mui/material';

export default class Appliances extends React.Component {
constructor() {
  super()
  this.state = {
    aList: [{label: 'Refrigerator', value: 0, error: false}],
    bList: [],
    cList: [],
    appButtons: ['fridge', 'tv', 'lights', 'oven', 'furnace'],
    total: 0,
    newAppliance: '',
    error: {
      name: '',
      value: '',
      negative: 'value > 0'
    },
  }
}

handleChange = (e, label, i, list) => {
  let value = e.target.value;

  switch (list) {
    case 'aList':
      let aListArr = this.state.aList;
      if (value < 0) {
        aListArr[i] = {label: label, value: value, error: true};
      } else {
        aListArr[i] = {label: label, value: value, error: false};
      }
      this.setState({aList: aListArr});
      break;
   
    case 'bList':
      let bListArr = this.state.bList;
      if (value < 0) {
        bListArr[i] = {label: label, value: value, error: true};
      } else {
        bListArr[i] = {label: label, value: value, error: false};
      }
      this.setState({bList: bListArr});
      break;
   
    case 'cList':
      let cListArr = this.state.cList;
      if (value < 0) {
        cListArr[i] = {label: label, value: value, error: true};
      } else {
        cListArr[i] = {label: label, value: value, error: false};
      }
      this.setState({cList: cListArr});
      break;
   
    default:
      break;
  }
}

addTotal = (e) => {
  e.preventDefault()
  let total = 0;
  this.state.aList.map(aWatts => {
    total = total + Number(aWatts.value);
  })
  this.setState({ total: total})
}
handleAddAppChange = (e) => {
    e.preventDefault();
    this.setState({ newAppliance: e.target.value })
  }


addAppliance = () => {

  //Error checking
  if (this.state.newAppliance == '') {
   return this.setState(prevState => ({
      error: {
        ...prevState.error,
        name: 'Please enter a name'
      }
    }));
  }
  if (this.state.newAppliance.length < 2) {
    return this.setState(prevState => ({
      error: {
        ...prevState.error,
        name: 'Minimum of two letters'
      }
    }));
  }
  //Unset errors if there were any
  this.setState(prevState => ({
    error: {
      ...prevState.error,
      name: ''
    }
  }));
  //Create new array for aList state
  let oldArr;
  if (this.state.aList.length < 6){
    oldArr = this.state.aList.slice();
    oldArr.push({label: this.state.newAppliance, value: 0, error: false});
    this.setState({ aList: oldArr});
  } else if (this.state.bList.length < 6){
    oldArr = this.state.bList.slice();
    oldArr.push({label: this.state.newAppliance, value: 0, error: false});
    this.setState({ bList: oldArr});
  } else {
    oldArr = this.state.cList.slice();
    oldArr.push({label: this.state.newAppliance, value: 0, error: false});
    this.setState({ cList: oldArr});
  }
  this.setState({newAppliance: ''});
}
  render() {
    const inputStyle = {
      addAppliance: {
        '& input:valid + fieldset': {
          borderColor: 'green',
          borderWidth: 2,
        }, 
        '& input:valid:hover + fieldset': {
          borderColor: '#00c821',
          borderWidth: 2
        },
        '& input:valid:focus + fieldset': {
          borderColor: 'green',
          borderLeftWidth: 6
        },
        '& label.Mui-focused': {
          color: 'green',
          fontWeight: '800',
          textShadow: '0 0 2px silver'
        },
        '& p.Mui-error' : {
          position: 'absolute',
          bottom: '-20px'
        },
        width: '180px'
      },
      appliance: {'& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'orange',
          borderWidth: 2
        },
        '&:hover fieldset': {
          borderColor: '#fee700',
          borderWidth: 2
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fea900',
          borderLeftWidth: 6
        },
        width: '180px'
      },
      '& .MuiInputLabel-root' : {
        '&.Mui-focused' : {
          color: '#fea900',
          fontWeight: 'bold',
          textShadow: '0 0 3px yellow'
        }
      }
    }
  }

    return (
      <div className='e-use-calc-container'>
        <div className='euc-header'>
          <h2>Energy use calculator</h2>
          <div className="ecc-total">
            <Button disabled={this.state.error.value.length? true: false} color='success' variant='outlined' className="btn-outline-info btn" id="total-btn" onClick={this.addTotal}>Show Total</Button>
            <div>
              <h4>Total: {parseInt(this.state.total) / 1000} kW</h4>
            </div>
          </div>
        </div>
        <form className="e-consumption-calc">
          <div><h3>Appliance List</h3> {}</div>
          <h4>Assuming you want to be able to use every appliance at the same time, this is the use of watts per hour per appliance to help understand the system size needed</h4>
          <div className='list-add-container'>

          <div className='app-containers'>
            
          
          <div className='app-container'>

            {this.state.aList.map((app, i) => {
              return (
                <div key={i}>
                  <TextField
                    label={app.label}
                    type='number'
                    id={app.label}
                    name={app.label}
                    margin='dense'
                    size='small'
                    onChange={e =>this.handleChange(e, app.label, i, 'aList')}
                    value={this.state.aList[i].value}
                    error={this.state.aList[i].error}
                    helperText={this.state.aList[i].error? this.state.error.negative : ''}
                    sx={inputStyle.appliance}
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>watts/hr</InputAdornment>
                    }}
                    />
                </div>
              )
            })}
            </div>
            <div style={this.state.bList.length? {margin: '0 20px'}: {margin: '0'}} className='app-container'>

            {
              this.state.bList.map((app, i) => {
                return(

                  <div key={i}>
                    <TextField
                      label={app.label}
                      type='number'
                      id={app.label}
                      name={app.label}
                      margin='dense'
                      size='small'
                      onChange={e =>this.handleChange(e, app.label, i, 'bList')}
                      value={this.state.bList[i].value}
                      error={this.state.bList[i].error}
                      helperText={this.state.bList[i].error? this.state.error.negative : ''}
                      sx={inputStyle.appliance}
                      InputProps={{
                        endAdornment: <InputAdornment position='end'>watts/hr</InputAdornment>
                      }}
                      />
                  </div>
                )
              })
            }
            </div>
            <div style={this.state.cList.length? {margin: '0 20px'}: {margin: '0'}} className='app-container'>
            {
              this.state.cList.map((app, i) => {
                return(

                  <div key={i}>
                    <TextField
                      label={app.label}
                      type='number'
                      id={app.label}
                      name={app.label}
                      margin='dense'
                      size='small'
                      onChange={e =>this.handleChange(e, app.label, i, 'cList')}
                      value={this.state.cList[i].value}
                      error={this.state.cList[i].error}
                      helperText={this.state.cList[i].error? this.state.error.negative : ''}
                      sx={inputStyle.appliance}
                      InputProps={{
                        endAdornment: <InputAdornment position='end'>watts/hr</InputAdornment>
                      }}
                    />
                  </div>
                )
              })
            }
            </div>
          </div>
          <div className='add-app-container'>
              <TextField 
                type='text' 
                label='Add Appliance' 
                onChange={this.handleAddAppChange} 
                value={this.state.newAppliance}
                margin='dense'
                size='small'
                sx={inputStyle.addAppliance}
                error={this.state.error.name.length? true: false}
                helperText={this.state.error.name}
                >
              </TextField>
              <IconButton sx={{height: '40px', marginBottom: '4px'}} onClick={this.addAppliance}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </IconButton>
            </div>
          </div>
        </form>

      </div>
    )
  }
}
