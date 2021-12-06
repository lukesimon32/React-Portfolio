import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/image4.jpg";
import stock4 from "../img/image5.jpg";
import stock5 from "../img/image6.jpg";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
              
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
            
                  <div className="work-img">
                    <a href="https://jmarrufo27.github.io/Brewery_Roulette/"><img src="https://user-images.githubusercontent.com/84144642/128243377-33446528-ddfa-4550-b299-9f76bc2d4b1e.png" alt="" className="img-fluid" /></a>
                  </div>
                  
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <a href="https://jmarrufo27.github.io/Brewery_Roulette/"><h2 className="w-title">Brewery Roulette</h2></a>
                        <div className="w-more">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                
                  <div className="work-img">
                    <a href="https://wastenomore.herokuapp.com/"><img src="https://user-images.githubusercontent.com/84144642/135945635-cd3da9c8-d6e5-4c6c-b94a-2017efa2de9d.png" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Waste No More</h2>
                        <div className="w-more">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <a href="https://lukesimon32.github.io/Password-Generator/"><img src="https://user-images.githubusercontent.com/84144642/124536042-13315880-ddcc-11eb-9220-2305ca2df7ef.png" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Password Generator</h2>
                        <div className="w-more">
                          
                          
                        </div>
                      </div>
                      {/* <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div> */}
                    </div>
                  </div>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <a href="https://github.com/lukesimon32/E-Commerce"><img src="https://user-images.githubusercontent.com/84144642/134097129-a3a1a78c-93f3-43eb-aa18-d924837d77f3.png" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">E-Commerce Back-end</h2>
                        <div className="w-more">
                          
                          
                        </div>
                      </div>
                      {/* <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div> */}
                    </div>
                  </div>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <a href="https://github.com/lukesimon32/Employee-Management-Tracker"><img src="https://nmoras.github.io/employee-tracker-mysql/assets/employeebyrole.png" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Employee Management Tracker </h2>
                        <div className="w-more">
                          
                          
                        </div>
                      </div>
                      {/* <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div> */}
                    </div>
                  </div>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                  <div className="work-img">
                    <a href="https://budget-tracker-26163.herokuapp.com/"><img src="https://user-images.githubusercontent.com/84144642/140850007-42716cf0-e017-44ca-b1ef-c8cc5e599230.png" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Budget Tracker</h2>
                        <div className="w-more">
                          
                          
                        </div>
                      </div>
                      {/* <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div> */}
                    </div>
                  </div>
               
              </div>
            </div>
            
           </div>           
          </div>
      </section>
    );
  }
}

export default Portfolio;
