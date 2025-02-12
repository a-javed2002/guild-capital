import React, { useState } from "react";
import perfomance7 from "../assets/images/perfomance7.png";
import perfomance8 from "../assets/images/perfomance8.png";

const PerfomanceCards = () => {

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={perfomance7} loading="lazy" />
                <p className="white-txt text-center font-xsm">Profit Factor</p>
                <h1 className="white-txt">1.57</h1>
            </div>
            {/* <hr style={{ backgroundColor: '#FFFFFF', width: '3px' }} /> */}
            <div
                className="mt-2 last-divider "

            />

            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={perfomance8} loading="lazy" />
                <p className="white-txt text-center font-xsm">Average Annual Gross Profit</p>
                <h1 className="white-txt">67%</h1>
            </div>

        </>
    );
};

export default PerfomanceCards;
