import { StyleBusRootCont } from "./Style/BusStyle"
import "./Style/Bus.css"
import { BusRootCard } from "./BusRootCard"

export const BusRoot = () => {
    return (

        <>

            <div className="bus-root-header">
                <h1 className="Recent-search-header header">Popular Bus Roots</h1>
            </div>

            <StyleBusRootCont>

                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>
                <BusRootCard></BusRootCard>

            </StyleBusRootCont>
        </>

    )
}
