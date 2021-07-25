import { BiBus } from "react-icons/bi"


export const RecentSearchCity = ({ from, to }) => {
    return (
        <>

            <div className="recent-search-city-div">

                <div className="bus-icon">
                    <BiBus></BiBus>
                </div>

                <spam>{`${from} - ${to}`}</spam>

            </div>

        </>

    )
}
