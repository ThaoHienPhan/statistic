import React from "react";
import PropTypes from "prop-types";

import BarChart from "./BarChart";
import ReactSwitch from "react-switch";


Statictis.propTypes = {};

function Statictis(props) {

  return (
    <div className="my-10 mx-28">
      <h1 className="text-5xl text-center">Statistic</h1>
      <div className="flex justify-end">
      <ReactSwitch />
      </div>
      <div> 
        <h2 className="text-3xl gradient-text">Prototype statistic</h2>
        <div className="bg-[#F3F3F3]/[.1] w-[700] h-[500]">
            <ReactSwitch />
            <BarChart />
        </div>
      </div>
      <div>
        <h2 className="text-3xl mt-[30px] gradient-text">Interactions statistic</h2>
       <div className="flex justify-between mt-[30px] text-center">     
       <div className="bg-[#F3F3F3]/[.1] w-[300px] h-[100px] flex justify-center items-center">
          <div>
          <p className="text-lg text-[#005072]">Visit Amount</p>
          <div className="text-5xl font-semibold text-[#005072] ">10,000</div>
          </div>
        </div>
        <div className="bg-[#F3F3F3]/[.1] w-[300px] h-[100px] flex justify-center items-center">
        <div>
          <p className="text-lg text-[#005072]">New User</p>
          <div className="text-5xl font-semibold text-[#005072]">10,000</div>
          </div>
        </div>
        <div className="bg-[#F3F3F3]/[.1] w-[300px] h-[100px] flex justify-center items-center">
        <div>
          <p className="text-lg text-[#005072]">New Feedback</p>
          <div className="text-5xl font-semibold text-[#005072]">10,000</div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Statictis;
