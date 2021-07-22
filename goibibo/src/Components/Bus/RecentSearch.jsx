import { RecentSearchCard } from "./RecentSearchCard"
import "./Style/Bus.css"
import {StyleRecentSearchCont} from "./Style/BusStyle"

export const RecentSearch = () => {
    return (
        <StyleRecentSearchCont>


            <div>
            <h1 className="Recent-search-header">Recent Searches</h1>
            </div>

          <RecentSearchCard></RecentSearchCard>
        </StyleRecentSearchCont>
    )
}
