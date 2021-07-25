import { RecentSearchCard } from "./RecentSearchCard";
import "./Style/Bus.css";
import { StyleRecentSearchCont } from "./Style/BusStyle";
import Carousel from 'react-elastic-carousel';

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
