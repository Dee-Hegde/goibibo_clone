import { BackBlueCircle } from './BackBlueCircle';
import { BusOperator } from './BusOperator';
import { BusRoot } from './BusRoot';
import { FAQ } from './FAQ';
import { OfferBox } from './OfferBox';
import { RecentSearch } from './RecentSearch';
import { SearchBox } from './SearchBox';

import {

    StyleBusPageCont,
    StylePageContentRaper,
    StyleSearchOfferBoxCont,
    StyleAddContainer

}
    from './Style/BusStyle.js'



export const BusPage = () => {
    
    return (
    <StyleBusPageCont>

            <BackBlueCircle></BackBlueCircle>

            <StylePageContentRaper>

                <div>
                    <h1 className="page-header">Bus Ticket Booking</h1>
                </div>

                <StyleSearchOfferBoxCont>

                    <SearchBox></SearchBox>
                    <OfferBox></OfferBox>

                </StyleSearchOfferBoxCont>

                <RecentSearch></RecentSearch>

                <StyleAddContainer>
                    <img src="ibiboAdd.png"/>
                </StyleAddContainer>

                <BusRoot></BusRoot>

                <BusOperator></BusOperator>

                <FAQ></FAQ>

            </StylePageContentRaper>

        </StyleBusPageCont>

    )
  
}
