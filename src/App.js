import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "./components/Chart"
class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Async call for API
    this.setState({
      chartData: {
        labels: ['Bob', 'Alice', 'Scott', 'Ken', 'Yost', 'Collette'],
        datasets: [
            {
                label: 'Probability of Winning',
                data: [
                    76759,
                    78104,
                    79306,
                    80651,
                    90516,
                    99507
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    }
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JavaScript UI Tutorial</h1>
        </header>
        <p className="App-intro">
          <code>github: https://github.com/huyle93/it704-react-demo</code>
        </p>
        <Chart class="chart" chartData={this.state.chartData} judge="Thomas Durkin" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
