import styled from "styled-components";

export const StyleBookingMainCont = styled.div`
box-sizing: border-box;
width:100%;
height:100vh;
background-color: #EEF4FD;
background-color:lightblue;
display: flex;
flex-direction: row;
padding-left: 2.9%;
padding-right: 2.9%;
gap:25px;
`

export const StyleRightCont = styled.div`
box-sizing: border-box;
width:68%;
height:100vh;
background-color: lightcyan;
border-radius: 6px;
z-index:2;
margin-top:195px;
display: flex;
flex-direction: column;

.travel-limited{
    box-sizing: border-box;
    width:100%;
    height:110px;
    background-color: white;
    border-radius: 6px;
    padding:1%;
    text-align: left;
    padding-left:3%;
    padding-right: 3%;
    padding-bottom: 2%;
}

.cancell-policy{
        float:right;
        color: #7087E3;
        font-size:12px;
        margin-top: 20px;
    }

    .seat-selected{
        font-size: 13px;
        color: grey;
        margin-top: 20px;
    }

.upper-box{

    border-bottom: 1px solid #EEF4FD;
    height: 62px;

    h2{
        font-weight: 600;
        font-size: 21px;
    }
    spam{
        font-size: 12px;
        color: grey;
    }

}
`

export const StyleLeftCont = styled.div`
box-sizing: border-box;
width:30%;
height:200vh;
background-color: lightgreen;
border-radius: 6px;
z-index:2;
margin-top:195px;
`
export const StyleReviewBox = styled.div`
box-sizing: border-box;
text-align: left;
padding-left:3%;
padding-top: 1.5%;
width:100%;
background-color: #2276E3;
height:190px;
margin-top:58px;
position:absolute;
color:white;
z-index:1;

h2{
    font-weight: 600;
    font-size: 23px;
}

spam{
font-weight: 300;
}

.route{
    margin-top: 35px;
}
`

export const StyleTicketDetailsMain = styled.div`
box-sizing: border-box;
margin-top: 20px;
width: 100%;
`