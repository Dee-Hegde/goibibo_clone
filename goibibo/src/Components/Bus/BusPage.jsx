import React from 'react';
import { BackBlueCircle } from './BackBlueCircle';
import { OfferBox } from './OfferBox';
import { SearchBox } from './SearchBox';

import {

    StyleBusPageCont,
    StylePageContentRaper,
    StyleSearchOfferBoxCont

}
    from './Style/BusStyle.js'



export const BusPage = () => {
    
    return (<StyleBusPageCont>

            <BackBlueCircle></BackBlueCircle>

            <StylePageContentRaper>

                <div>
                    <h1 className="page-header">Bus Ticket Booking</h1>
                </div>

                <StyleSearchOfferBoxCont>

                    <SearchBox></SearchBox>
                    <OfferBox></OfferBox>
                </StyleSearchOfferBoxCont>

            </StylePageContentRaper>

        </StyleBusPageCont>

    )
  
}
