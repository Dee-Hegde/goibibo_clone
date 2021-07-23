import "./Style/Bus.css"
import { StyleBusOperatorCont } from "./Style/BusStyle"

export const BusOperator = () => {

    const data = ["Cauvery Travels","Ideal Travels","MRC Travels","Sri Durga Tourist","VRL Travels", "Pragathi Tourist Corporation","Bharathi Travels","Sugama Tourist","Sowmiya Travels","Anand Travels"]

    return (
        <>

            <div className="bus-root-header">
                <h1 className="Recent-search-header header">Popular Bus Operators</h1>
            </div>

            <StyleBusOperatorCont>

                <p>
                    {data.map((el) => {

                        return <>

                         <a>{el}</a>
                         <spam>l</spam>
                         </>
                    })}

                </p>

            </StyleBusOperatorCont>
        </>
    )
}
