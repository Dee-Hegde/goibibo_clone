import { BiBus } from "react-icons/bi"
import {StyleBusRootCard} from "./Style/BusStyle"

export const BusRootCard = () => {
    return (

        <StyleBusRootCard>

            <div className="icon-cont">
                <BiBus></BiBus>
            </div>

            <div className="text-box" style={{margin:"1px"}}>
                <h1>Bangloare Buses</h1>
                <p>To: 
                    <spam> Manali, </spam>
                    <spam>Chandigarh, </spam>
                    <spam>Jaipur, </spam>
                    <spam>Dehradun, </spam>
                    </p>
            </div>

        </StyleBusRootCard>
    )
}
