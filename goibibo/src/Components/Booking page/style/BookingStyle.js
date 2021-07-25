import styled from "styled-components";
export const StyleBookingMainCont = styled.div`
box-sizing: border-box;
width:100%;
height:auto;
background-color: #EEF4FD;
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
background-color: #EEF4FD;
border-radius: 6px;
z-index:2;
margin-top:195px;
display: flex;
flex-direction: column;
.imp-information{
    width:100%inherit;
    height:120px;
    background-color: white;
    border-radius: 6px;
    margin-top: 15px;
    img{
        width:100%;
        height:100%
    }
}
.point-details-card{
        box-sizing: border-box;
        width:100%;
        display:grid;
        grid-template-columns: 49% 49%;
        column-gap: 2%;
        grid-template-rows: 170px;
        margin-top:20px;
        border-radius: 6px;
        .Point-detail-content{
            padding-left:5.5%;
            padding-right: 3%;
            padding-bottom: 2%;
            padding-top: 5%;
            text-align: left;
            h3{
                font-size: 14px;
                font-weight: 500;
            }
            div{
                box-sizing: border-box;
                background-color: #2276E3;
                width:40%;
                height:19px;
                font-size: 11px;
                font-weight: 700;
                text-align: center;
                padding-top: 0.3%;
                border-radius: 2px;
                color: white;
                margin-top: 10px;
            }
            h2{
                font-size:20px;
                font-weight: 600;
                margin-top: 10px;
            }
            p{
                font-size: 13px;
                margin-top: 10px;
                color: grey;
            }
        }
        .boarding-point{
            background-color: white;
            border-radius: 6px;
        }
        .dropping-point{
            background-color: white;
            border-radius: 6px;
        }
    }
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
        margin-top: 0px;
        spam{
            font-weight: 700;
            color: black;
        }
        .dot{
            font-weight: 700;
            margin-left:10px;
            font-size: 19px;
        }
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
height:195vh;
/* background-color: lightgreen; */
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