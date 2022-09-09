import axios from "axios";
import { useEffect, useState } from "react";

let Covid = () => {
    let [sata,setSata]=useState([]);
    let getAllData = async() =>{
        let det = await axios.get("https://data.covid19india.org/data.json");
        let pureData=det.data.statewise[0];
        setSata(pureData);
        console.log(pureData)
    }

    useEffect(()=>{
        getAllData()

    },[])
    return (
        <div>
            <h3 className="head text-center"> 🔴 LIVE</h3>
            <h2 className="kuch text-center">COVID-19 CORONAVIRUS TRACKER</h2>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mar">

                        <div class="card">
                            
                                <div class="card-body  card-color heig">
                                    <p class="card-title text-center"> <span className="B">OUR</span>  <span className="A"> COUNTRY </span></p>
                                    <p class="card-text text-center MIN">PAKISTAN</p>
                                    
                                </div>
                        </div>



                    </div>
                    <div className="col-lg-4 col-sm-12 mar">

                    <div class="card">
                            
                            <div class="card-body card-color heig">
                                <p class="card-title text-center"> <span className="B">TOTAL</span>  <span className="A"> RECOVERED </span></p>
                                <p class="card-text text-center MIN">{sata.recovered}</p>
                                
                            </div>
                    </div>



                    </div>
                    <div className="col-lg-4 col-sm-12 mar">

                    <div class="card">
                            
                            <div class="card-body card-color heig">
                                <p class="card-title text-center"> <span className="B">TOTAL</span>  <span className="A"> CONFIRMED </span></p>
                                <p class="card-text text-center MIN">{sata.confirmed}</p>
                                
                            </div>
                    </div>


                    </div>

                </div>

            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 mar">

                        <div class="card">
                            
                                <div class="card-body card-color heig">
                                    <p class="card-title text-center"> <span className="B">TOTAL</span>  <span className="A"> DEATHS </span></p>
                                    <p class="card-text text-center MIN">{sata.deaths}</p>
                                    
                                </div>
                        </div>



                    </div>
                    <div className="col-lg-4 col-sm-12 mar">

                    <div class="card ">
                            
                            <div class="card-body card-color heig">
                                <p class="card-title text-center"> <span className="B">TOTAL</span>  <span className="A"> ACTIVE  </span></p>
                                <p class="card-text text-center MIN">{sata.active}</p>
                                
                            </div>
                    </div>



                    </div>
                    <div className="col-lg-4 col-sm-12 mar">

                    <div class="card">
                            
                            <div class="card-body card-color">
                                <p class="card-title text-center"> <span className="B">LAST </span>  <span className="A"> UPDATE </span></p>
                                <p class="card-text text-center MIN">{sata.lastupdatedtime}</p>
                                
                            </div>
                    </div>


                    </div>

                </div>

            </div>




        </div>
    )
}
export default Covid;