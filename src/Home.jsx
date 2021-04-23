import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Services from "./Services";
import "./App.css"


class Home extends React.Component {
  state = {
    image : '',
    cbow : 0,
    lstm : 0,
    cnn_lstm : 0,
    dataPie: ''
  }

  componentDidMount(){
    let pie = {
      labels: ["CBOW", "LSTM", "CNN-LSTM"],
      datasets: [
        {
          data: [this.state.cbow , this.state.lstm, this.state.cnn_lstm],
          backgroundColor: [
            "#F7464A",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
    this.setState({dataPie : pie})
  }

  render() {
    var base64img = "data:image/png;base64," + this.state.image
    //const [startDate, setStartDate] = useState(new Date());
    const handleGetResult = () => {
      
      Services.getData().then((res) => {
        let result = res.data;
        this.setState({cbow : result.cbow})
        this.setState({lstm : result.lstm})
        this.setState({cnn_lstm : result.cnn_lstm})
        this.setState({image : result.image})
        console.log(result);
      });
      };


    return (
      <div>
        <div class="container">
          <div class="row">
            <h1>SentimentsAnalysis Using Hybrid CNN-LSTM Model</h1>
          <div class="container">
            <div class="row">
              <div class="col-sm">
              <button class="btn btn-lg btn-block btn-outline-primary" onClick={handleGetResult}>Get Results</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <br></br>

        <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">CBOW</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{this.state.cbow}</h1>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">LSTM</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{this.state.lstm}</h1>
          </div>
        </div>
        <div class="card mb-4 box-shadow">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">CNN-LSTM</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">{this.state.cnn_lstm}</h1>
          </div>
        </div>
      </div>

      <MDBContainer>
        <h3 className="mt-5">Data</h3>
        <Pie data={{
      labels: ["CBOW", "LSTM", "CNN-LSTM"],
      datasets: [
        {
          data: [this.state.cbow , this.state.lstm, this.state.cnn_lstm],
          backgroundColor: [
            "#F7464A",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }} options={{ responsive: true }} />
      </MDBContainer>
      <div>
      <img src={base64img}/>
      </div>
      </div>
    );
  }
}

export default Home;