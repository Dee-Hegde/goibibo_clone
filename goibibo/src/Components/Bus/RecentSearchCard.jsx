import Paper from '@material-ui/core/Paper';
import "./Style/BusStyle";
import { makeStyles } from '@material-ui/core/styles';
import { RecentSearchCity } from './RecentSearchCity';
import { BiChevronRight } from "react-icons/bi";
import "./Style/Bus.css";
import { useSelector } from 'react-redux';

export const RecentSearchCard = () => {


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                marginTop: theme.spacing(2),
                width: theme.spacing(33),
                height: theme.spacing(7.5),
                padding: theme.spacing(2),
                borderRadius: theme.spacing(1)
            },
        },
    }));

    const classes = useStyles();

    const recentSearches = useSelector((state) => state.bookingred.recentSearches);

    return (

        <div className="recent-search-main-cont">




            <div className={classes.root}>

                <Paper elevation={3}>

                    <RecentSearchCity from="Jaipur" to="Sikar"></RecentSearchCity>

                    <div className="right-icon">
                        <BiChevronRight></BiChevronRight>
                    </div>

                    <div className="search-city-date">25-07-2021</div>
                </Paper>




                {recentSearches && recentSearches.map((el, index) => {

                    return <>

                        <Paper elevation={3} key={index}>

                            <RecentSearchCity from={el.from} to={el.to}></RecentSearchCity>

                            <div className="right-icon">
                                <BiChevronRight></BiChevronRight>
                            </div>

                            <div className="search-city-date">{el.date}</div>
                        </Paper>

                    </>

                })}


            </div>

        </div>

    )

}
