import { useState } from 'react'
import {
    StyleSearchBox,
    StyleDatePickerInput,
    StyleInputLabel,
    StyleSearchBusButton
}
    from '../../Style/BusStyle'


export const SearchBox = () => {

    return (
        <StyleSearchBox>

            <form>

                <div className="search-box-input-cont">

                    <StyleInputLabel>FROM</StyleInputLabel>
                    <StyleDatePickerInput type="text" placeholder="Enter Source" />

                    <StyleInputLabel>TO</StyleInputLabel>
                    <StyleDatePickerInput type="text" placeholder="Enter Destination" />

                    <StyleInputLabel>Travel Date</StyleInputLabel>
                  
                    <StyleDatePickerInput type="date" placeholder="none" style={{ border: "none", borderBottom: "1px solid grey" }} />

                </div>
            </form>

            <div style={{ display: "grid", gridTemplateColumns:"auto auto",gridTemplateRows:"40px",marginTop:"10px"}}>

                <div className="social-dis-img">
                    <img src="ibiboimg.png" alt="error" />
                </div>

                <div className="know-more-text"> Know More.</div>

                <div class="box arrow-top">
                <img src="goibiboimg2.png" alt="errorr" style={{width: "100%",height:"100%"}}/>
            </div>


            </div>

            <StyleSearchBusButton>SEARCH BUS</StyleSearchBusButton>


        </StyleSearchBox>
    )
}
