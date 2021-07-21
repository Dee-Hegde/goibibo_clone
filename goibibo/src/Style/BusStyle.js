import styled from "styled-components"

export const StyleBusPageCont = styled.div`
width: 100%;
background-color:#EFF3F8;
margin: auto;
`

export const StylePageContentRaper = styled.div`
box-sizing: border-box;
width: 90%;
margin: 0% 5% 0% 5%;
height: 800px;
position: absolute;
z-index: 2;
text-align: left;

.page-header{
    color: rgb(255,255,255);
    font-size: 24px;
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
width: 25%;
height: 85px;
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

`
export const StyleOfferBox = styled(StyleSearchBox)`
background-color: olive;
`

export const StyleSearchOfferBoxCont = styled.div`
box-sizing: border-box;
display: grid;
grid-template-rows: 420px;
grid-template-columns: 49% 49%;
grid-column-gap: 2%;

`
export const StyleDatePickerInput = styled.input`
border:none;
border-bottom-style: solid;
border-bottom-color: rgb(239, 243, 248);
margin-top:4px;
outline: none;

::placeholder{
    color:grey;
    font-weight:600;
    font-size:1.1rem;
}

`
export const StyleInputLabel = styled.label`
margin: 15px 0px;
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
margin-top: 93px;
z-index: 1;

`