import React, {Component} from 'react';
// import './App.css';
import Navbar from'./MyAppBar.js';
import Card from'./FoodCard.js';
class App extends Component {
    constructor(){
        super();
        this.state ={
            foods : [
                {
                    title : 'Fried Chicken di geprek',
                    date : '32 Desember 2099',
                    description : 'puasa woy'
                },
                {
                    title : 'Fried Chicken di tongseng with Ketchup',
                    date : '00 Januari 2999',
                    description : 'masih puasa woy'
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <Navbar/>
                <br/>
                {this.state.foods.map((data)=>{
                    return(
                        <div>
                            <Card title={data.title} date={data.date} description={data.description}/>
                            <br/>
                        </div>
                    )
                })}
                
            </div>

        );  
    }
}

export default App;
