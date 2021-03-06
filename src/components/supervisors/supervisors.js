import React from 'react';
import axios from 'axios';
import SupervisorsTable from './supervisorsTable';
import { withRouter } from 'react-router-dom';

let row=[];

 class Supervisors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:''
        }
    }
    load=()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/users')
        .then((res) =>{

            this.setState({supervisors: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
    }
    componentDidMount(){
     this.load()
    }

    componentWillMount(){
        this.setState({
            supervisors:''
        })
    }

    goToAdd=()=>{
        this.props.history.push('/supervisors/add')
    }

    render(){
  
        return(
            <div>
                                <div className='col-md-5 row'><a href='/#/performance'><button className="btn btn-info">Performance</button></a>    <button onClick={this.goToAdd} className="btn btn-info">Add supervisor</button></div>

                <div className="row">
                <SupervisorsTable reload={this.load} supervisors={this.state.supervisors}/>
                </div>
                <div className="row" >
                <div e='col-md-2'>    <button className="btn btn-info">Drop supervisor</button></div>

                </div>
            </div>
        )
    }
}

export default withRouter(Supervisors)