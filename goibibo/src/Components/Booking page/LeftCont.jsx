import CheckBox from "@material-ui/icons/CheckBox"
import { AcordionBoxPrice } from "./AccordionBoxPrice"
import { AccordionOfferBox } from "./AccordionOfferBox"
import {StyleLeftCont} from "./style/BookingStyle"

export const LeftCont = () => {
    return (
       <StyleLeftCont>
           
           <AcordionBoxPrice></AcordionBoxPrice>

           <AccordionOfferBox></AccordionOfferBox>
           
       </StyleLeftCont>
    )
}
