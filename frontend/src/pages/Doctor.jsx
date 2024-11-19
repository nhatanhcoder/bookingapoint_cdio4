import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctor = () => {

    const {speciality} = useParams()

    const {doctor} = useContext(AppContext)
    return (
      <div>
        <p>z</p>
        <div>
            <div>Bác sĩ đa khoa</div>
            <div>Bác sĩ phụ khoa</div>
            <div>Bác sĩ da liễu</div>
            <div>Bác sĩ nhi khoa</div>
            <div>Bác sĩ thần kinh</div>
            <div>Bác sĩ tiêu hóa</div>
        </div>
      </div> 
    )
};

export default Doctor;
