import styled from "styled-components"

export const StyleBusPageCont = styled.div`
width: 100%;
height:100rem;
background-color:#EFF3F8;
margin: auto;
`

export const StylePageContentRaper = styled.div`
box-sizing: border-box;
width: 94%;
margin: 6% 3% 0% 3%;
height: 800px;
position: absolute;
z-index: 2;
text-align: left;

.page-header{
    color: rgb(255,255,255);
    font-size: 22px;
    font-weight: 600;
}

`

export const StyleSearchBox = styled.div`
box-sizing: border-box;
background-color: white;
border-radius: 15px;
box-shadow: rgb(0 0 0 / 13%) 0px 0.2rem 1.2rem 0px;
padding:3% 5%;

.search-box-input-cont{
    display:flex;
    flex-direction: column;


input[type="date"]::-webkit-calendar-picker-indicator {
  color: transparent;
  background: none;
  z-index: 1;
  margin-right: 35%;
  margin-left:-0.5%;
  position:absolute;
  width: 13%;
}
}

.social-dis-img{
    margin-top:20px;
    height: 35px;

    img{
        width: 100%;
        height: 100%;
    }   
}

.know-more-text{
    font-size:13.8px;
    font-weight:400;
    margin-top: 30px;
    color: #2276E4;
    margin-left: 2px;
}

.know-more-text:hover +.box {
    display:block;
}

.box {
box-sizing: border-box;
background: rgb(209, 229, 255);
border: 2px solid rgb(155, 194, 246);
border-radius: 0.8rem;
position: absolute; 
width: 26%;
height: 82px;
z-index: 2;
margin-top: 60px;
margin-left:28%;
padding: 0.5% 1%;
display:none;
}

.box.arrow-top:after {
  content: " ";
  position: absolute;
  right: 47%;
  top: -15px;
  border-top: none;
  border-right: 15px solid transparent;
  border-left: 15px solid transparent;
  border-bottom: 15px solid #9BC2F6;
}

.swipe-icon{
    font-size:40px;
  color:grey;
  margin-left: 92%;
margin-top: -5%;
}

.to-label{
    margin-top: 0px;
}
`

export const StyleOfferBox = styled(StyleSearchBox)`
padding: 0%;
border: none;
box-shadow:none;
background-color: transparent;

.slide-show-cont{
    width:100%;
    height:190px;
}
img{
    width: 100%;
    height: 100%;
}
`

export const StyleSearchOfferBoxCont = styled.div`
box-sizing: border-box;
display: grid;
grid-template-rows: 420px;
grid-template-columns: 49% 49%;
grid-column-gap: 2%;
margin-top:18px;
`
export const StyleDatePickerInput = styled.input`
width:98%;
box-sizing: border-box;
border:none;
border-bottom-style: solid;
border-bottom-color: rgb(239, 243, 248);
margin-top:0px;
outline: none;
font-size: 1.2rem;
font-weight:600;
padding-bottom :10px;

::placeholder{
    color:grey;
    font-weight:600;
    font-size:1.1rem;
}

`
export const StyleInputLabel = styled.label`
margin: 13px 0px;
color: rgb(137, 139, 145);
font-size:1.1rem;
`

export const StyleSearchBusButton = styled.button`
box-sizing:border-box;
width: 50%;
height: 58px;
border: none;
background-color: rgb(255,109,56);
color: white;
font-weight: bold;
border-radius: 3rem;;
font-size: 20px;
margin-left:25%;
margin-right: 25%;
margin-top: 67px;
z-index: 1;

`
export const StyleCarouselImgDiv = styled.div`
width:100%;
height:212px;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 4em;
margin: 0% 2%;
border-radius: 15px;

img{
    width: 100%;
    border-radius: 15px;
}
`
export const StyleCarouselTextBox = styled(StyleCarouselImgDiv)`
height: 80px;
background-color:yellow;
margin:0%;
`

export const StyleRecentSearchCont = styled.div`
width: 100%;
height: 150px;
margin-top: 120px;
`
export const StyleAddContainer = styled.div`
box-sizing: border-box;
width: 80%;
height: 90px;
background-color: white;
margin: auto;
margin-top: 40px;

img{
    width: 100%;
    height: 90%
}
`

export const StyleBusRootCont = styled.div`
box-sizing:border-box;
width: 99.5%;
height:290px;
background-color:white;
margin-top:16px;
box-shadow: rgb(0 0 0 / 25%) 0px 0.1rem 0.4rem 0px;
border-radius: 0.6rem;
display:grid;
grid-template-rows: 90px;
grid-template-columns: 35% 35% 35%;
padding: 1.5%

`
export const StyleBusRootCard = styled.div`
display: flex;
flex-direction: row;

.icon-cont{
    box-sizing:border-box;
    margin:1px;
    margin-right: 10px;
    padding-top: 3%;
    color:#647A97;
    font-size:14px
}

.text-box{
    h1{
        font-size: 18.5px;
        font-weight: 500;
    }
    p{
        font-size: 14px;
        font-weight: 500;
        color:black;
        margin-top:5px
    }
    spam{
        color:#1680E0;
    }
    spam:hover{
        color:orange
    }
}
`

export const StyleBusOperatorCont = styled(StyleBusRootCont)`
box-sizing:border-box;
height: 100px;
display: flex;
font-size:17px;

a{
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0px 0.5rem;
    color:#166BD6;
}
a:hover{
    color:orange
}

p{
    display: flex;
    flex-flow: row wrap;
    -webkit-box-align: center;
    align-items: center;
}
`
export const StyleFAQCont = styled(StyleBusRootCont)`
box-sizing: border-box;
display:flex;
flex-direction: column;
height:auto;
padding-right: 10%;

.Q-icon{
    box-sizing: border-box;
    width:23px;
    height:23px;
    border-radius: 50%;
    background-color:#EEF4FD;
    text-align:center;
    font-size: 14px;
    font-weight:600;
    
}

.A-icon{
    box-sizing: border-box;
    width:23px;
    height:23px;
    border-radius: 50%;
    background-color:#EEF4FD;
    text-align:center;
    font-size: 14px;
    font-weight:400;
}

.Question{
    display:flex;
    flex-direction:row;
    gap:10px
}

.answer{
    
    margin-top:13px;
    margin-bottom:23px;
}

.Q-text{
    font-weight: 500;
    font-size:18.5px
}
.A-text{
width:auto;
font-size:16px;
margin-left:36px;
margin-top: -2.3%;
font-weight: 400;
}

`

export const StyleFooterDiv = styled.div`
box-sizing: border-box;
width:100%;
background-color: white;
height: 768px;
margin-top:68%;

div{

margin:0%;

    img{
    width:100%;
    height:100%
}

}

`