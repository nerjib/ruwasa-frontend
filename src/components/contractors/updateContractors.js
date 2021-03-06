import React from 'react';

import axios from 'axios'
import {  Redirect, withRouter } from 'react-router-dom';


class UpdateContractors extends React.Component{
    constructor(props){
        super(props)
        this.state={
            company:    '',
            Address:    '',
            email:  '',
            phone:  '',
            active: 'active'

        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        
        this.setState({
            [name]: value
        })

        e.preventDefault()

    }
    onSubmit = () => {
        const {params}=this.props.match;

        const obj = {
        company: this.state.company,
        address: this.state.address,
        email: this.state.email,
        phone: this.state.phone,
       active:this.state.active
        }

        axios.put('https://ruwassa.herokuapp.com/api/v1/contractors/'+params.id,obj)
        .then((res)=>{
          //  console.log(res.data)
        this.props.history.push('/contractors')
        
        }).catch((error)=>{
            console.log(error)
        })
        this.props.history.push('/contractors')

    }

    componentDidMount=()=>{
        const {params}=this.props.match;

        axios.get('https://ruwassa.herokuapp.com/api/v1/contractors/'+params.id)
        .then(res=>{
this.setState({
    company:   res.data[0].company,
    Address:   res.data[0].address,
    email:  res.data[0].email,
    phone:  res.data[0].phone,
})
        }).catch(error=>{console.log(error)})
    }

    render(){
        return(
            <div style={{}}>
              <form>
                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                    Company Name
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='company'  class="form-control" value={this.state.company}
                        onChange={this.handleChange} placeholder='Company Name' required/>
                        </div>
                  </div>
                    <br/>
                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                    Company Address
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='address'  class="form-control" value={this.state.address}
                        onChange={this.handleChange} placeholder='Company address' required/>
                        </div>
                  </div>
                  <br/>
                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                   Email
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='email'  class="form-control" value={this.state.email}
                        onChange={this.handleChange} placeholder='Email' />
                        </div>
                  </div>
                  <br/>
                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                   Phone
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='phone'  class="form-control" value={this.state.phone}
                        onChange={this.handleChange} placeholder='Phone no. ' />
                        </div>
                  </div>
                  <br/>
                
    <button onClick={this.onSubmit}>Add</button> 

                </form> 
            </div>
        )
    }

}
export default withRouter(UpdateContractors)