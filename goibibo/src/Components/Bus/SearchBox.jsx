import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    StyleSearchBox,
    StyleDatePickerInput,
    StyleInputLabel,
    StyleSearchBusButton
}
    from './Style/BusStyle';

import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import { formData } from '../../redux/SearchBus/Action';

export const SearchBox = () => {

 const dispatch = useDispatch();
 const Alldata = useSelector((state) => state.booking.recentSearches)


    let initData = {
        from: "",
        to: "",
        date: ""
    };

    const [data, setData] = useState(initData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = () => {

        dispatch(formData(data));
        console.log(Alldata);

    };

    let { from, to } = data;

    const SwipeMe = () => {

        [from, to] = [to, from];
        setData({ ...data, from: from, to: to });
       
    };



    return (
        <StyleSearchBox>

            <div className="search-box-input-cont">

                <StyleInputLabel>FROM</StyleInputLabel>

                <StyleDatePickerInput
                    type="text" placeholder="Enter Source" onChange={handleChange} name="from" value={from} />

             
                    <SwapVerticalCircleIcon onClick={SwipeMe} className="swipe-icon"></SwapVerticalCircleIcon>
               

                <StyleInputLabel className="to-label">TO</StyleInputLabel>
                <StyleDatePickerInput type="text" placeholder="Enter Destination" onChange={handleChange} name="to" value={to} />

                <StyleInputLabel>Travel Date</StyleInputLabel>

                <StyleDatePickerInput type="date" onChange={handleChange} name="date" placeholder="none" style={{ border: "none", borderBottom: "1px solid grey" }} />

            </div>




            <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridTemplateRows: "40px", marginTop: "10px" }}>

                <div className="social-dis-img">
                    <img src="ibiboimg.png" alt="error" />
                </div>

                <div className="know-more-text"> Know More.</div>

                <div class="box arrow-top">
                    <img src="goibiboimg2.png" alt="errorr" style={{ width: "100%", height: "100%" }} />
                </div>

            </div>

            <StyleSearchBusButton onClick={handleSubmit}>SEARCH BUS</StyleSearchBusButton>


        </StyleSearchBox>
    )
}
