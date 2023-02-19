
import  InputLabel from '@mui/material/InputLabel';
import  MenuItem from '@mui/material/MenuItem';
import  Select from '@mui/material/Select';
import  FormControl from '@mui/material/FormControl';
import  TextField from '@mui/material/TextField';
import  InputAdornment from '@mui/material/InputAdornment';
import  Button from '@mui/material/Button';
import React from 'react';
import EnergyOutputs from './EnergyOutputs'


export default class SystemForm extends React.Component {
  constructor() {
    super()
    this.state = {
      showOutputs: false,
      systemCapacity: 0.5,
      moduleType: 1,
      loss: 0,
      tilt: 40,
      azimuth: 180,
      address: '',
      inv_eff: 96,
      output: [],
      error: {
        systemCapacity: '',
        loss: '',
        tilt: '',
        azimuth: '',
        address: '',
        inv_eff: '',
      },
      valid: true,
      tooltip: {
        sys_cap: 'This is the sum total wattage capacity of the solar panel array',
        panel_type: <div>0 = PolyCrystaline<br/>1 = MonoCrystaline<br/>2 = Thin Film</div>,
        loss: 'This is system loss related to "electrical friction" from wire diameter',
        tilt: 'Angle between 0 and 90 that pivots on the z axis towards the sun',
        azimuth: 'Angle between 0 and 359 that pivots east to west. 180 is geographic south',
        address: 'Example: Boulder Colorado (Must be location in USA)',
        eff_inv: 'Efficiency percentage of DC to AC converter'
      }
    }
  }
  showOutputs = () => {
    this.setState({ showOutputs: !this.state.showOutputs})
  }
  resetError = (inputType, val) => {
    this.setState({ [inputType]: val})
      this.setState(prevState => ({
        error: {
          ...prevState.error,
          [inputType]: ''
        }
    }))
  }
  checkValid = sysInput => {
    if (this.state.error[sysInput].length) {
      this.setState({valid: false});
    } else {
      this.setState({valid: true});
    }
  }
  systemOutput = async (event) => {
    event.preventDefault()
    const apiKey = process.env.REACT_APP_APIKEY;
    let response = await fetch(`https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKey}&address=${this.state.address}&system_capacity=${this.state.systemCapacity}&azimuth=${this.state.azimuth}&tilt=${this.state.tilt}&array_type=1&module_type=${this.state.moduleType}&losses=${this.state.loss}`)
    let data = await response.json()
    if (data.errors.length) {
      return this.setState(prevState => ({
        error: {
          ...prevState.error,
          address: data.errors[0]
        }
      }))
    } else {
      this.setState(prevState => ({
        error: {
          ...prevState.error,
          address: ''
        }
      }))
    }
    this.setState({ output: data.outputs})
    this.showOutputs()
  }
  
  handleChange = (event, inputType) => {
    const val = event.target.value;
    switch (inputType) {
      case 'systemCapacity':
        if (val < 0.5 || val > 5000) {
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              systemCapacity: '0.5 > Value > 5000'
            }
          }));
          this.setState({valid: false});
        } else {
          this.resetError(inputType, val);
          this.setState({valid: true});
        }
        break;
      case 'loss':
        if (val < -5 || val > 99) {
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              loss: '-5 > % > 99'
            }
          }));
          this.setState({valid: false});
        } else {
          this.resetError(inputType, val);
          this.setState({valid: true});
        }
        break;
      case 'tilt':
        if (val < 0 || val > 90) {
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              tilt: '0 > Degrees > 90'
            }
          }));
          this.setState({valid: false});
        } else {
          this.resetError(inputType, val);
          this.setState({valid: true});
        }
        break;
      case 'azimuth':
        if (val < 0 || val > 360) {
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              azimuth: '0 > Degrees > 360'
            }
          }));
          this.setState({valid: false});
        } else {
          this.resetError(inputType, val);
          this.setState({valid: true});
        }
        break;
      case 'inv_eff':
        if (val < 90 || val > 99.5) {
          this.setState(prevState => ({
            error: {
              ...prevState.error,
              inv_eff: '90 > % > 99.5'
            }
          }));
          this.setState({valid: false});
        } else {
          this.resetError(inputType, val);
          this.setState({valid: true});
        }
        break;
    }
    this.setState({ [inputType]: event.target.value})
  }
  
  render() {
    const formInput = {
      width: '150px',
      m: 1,
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'orange',
          borderWidth: 2
        },
        '&:hover fieldset': {
          borderColor: '#fee700',
          borderWidth: 2
        },
        '&&.Mui-selected fieldset': {
          backgroundColor: 'transparent'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fea900',
          borderLeftWidth: 6,
          backgroundColor: 'transparent'
        },
      },
      '& label.Mui-focused': {
        color: '#fea900',
        fontWeight: '800',
        textShadow: '0 0 3px yellow'
      }
    }
    
    return (

      <div className="sys-cap">

        <div className='sys-form-container'>
          <form onSubmit={this.systemOutput} className="sys-form">
          
          <FormControl>
            <TextField
              error={this.state.error.systemCapacity.length? true : false}
              helperText={this.state.error.systemCapacity}
              label='Capacity'
              type='number'
              id="systemCapacity" 
              value={this.state.systemCapacity}
              min="0.5"
              onChange={e => this.handleChange(e, 'systemCapacity')}
              sx={formInput}
              InputProps={{
                endAdornment: <InputAdornment position='end'>kW</InputAdornment>
              }}
            >
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              select
              label="Panel Type"
              variant='outlined'
              id="moduleType"
              value={this.state.moduleType}
              onChange={e => this.handleChange(e, 'moduleType')}
              sx={formInput}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
            </TextField>
          </FormControl>
          <FormControl>
          <TextField
              error={this.state.error.loss.length? true : false}
              helperText={this.state.error.loss}
              label='System Loss'
              type='number'
              id="loss" 
              value={this.state.loss}
              onChange={e => this.handleChange(e, 'loss')}
              sx={formInput}
              InputProps={{
                endAdornment: <InputAdornment position='end'>%</InputAdornment>
              }}
            >
            </TextField>
          </FormControl>
          <FormControl>
          <TextField
              error={this.state.error.tilt.length? true : false}
              helperText={this.state.error.tilt}
              label='Tilt'
              type='number'
              id="tilt" 
              value={this.state.tilt}
              onChange={e => this.handleChange(e, 'tilt')}
              sx={formInput}
              InputProps={{
                endAdornment: <InputAdornment position='end'>°</InputAdornment>
              }}
            >
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              error={this.state.error.azimuth.length? true : false}
              helperText={this.state.error.azimuth}
              label='Azimuth'
              type='number'
              id="azimuth" 
              value={this.state.azimuth}
              onChange={e => this.handleChange(e, 'azimuth')}
              sx={formInput}
              InputProps={{
                endAdornment: <InputAdornment position='end'>°</InputAdornment>
              }}
            >
            </TextField>
          </FormControl>
          <FormControl>
          <TextField
              label='Address'
              type='text'
              minRows={3}
              id="address"
              value={this.state.address}
              sx={formInput}
              onChange={e => this.handleChange(e, 'address')} 
            >
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              error={this.state.error.inv_eff.length? true : false}
              helperText={this.state.error.inv_eff}
              label='Inverter Efficiency'
              id="inv_eff" 
              value={this.state.inv_eff}
              onChange={e => this.handleChange(e, 'inv_eff')}
              sx={formInput}
              InputProps={{
                endAdornment: <InputAdornment position='end'>%</InputAdornment>
              }}
            >
            </TextField>
          </FormControl>
          <Button 
            color='success' 
            variant='outlined' 
            type='submit'
            label=''
            disabled={!this.state.valid}
            sx={{
              width: '150px',
              height: '50px',
              marginLeft: '8px'
            }}
          >
            <div className='output-btn'>Output <span className='dashed-arrow'>&#10143;</span></div>
          </Button>
          </form>
        </div>
        <div className="outputs-error-container">
          {this.state.showOutputs ?
          <EnergyOutputs
          systemCapacity={this.state.systemCapacity}
          moduleType={this.state.moduleType}
          loss={this.state.loss}
          tilt={this.state.tilt}
          azimuth={this.state.azimuth}
          address={this.state.address}
          inv_eff={this.state.inv_eff}
          output={this.state.output}
          userId={this.props.userId}
          baseURL={this.props.baseURL}
          />
          : null
          }
          {this.state.error.address.length? <div className='address-error'><h3>{this.state.error.address}</h3></div>: null}
        </div>

      </div>
    )
  }
}
