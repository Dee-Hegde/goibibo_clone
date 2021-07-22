import Paper from '@material-ui/core/Paper';
import "./Style/BusStyle";
import { makeStyles } from '@material-ui/core/styles';
import { RecentSearchCity } from './RecentSearchCity';
import { BiChevronRight } from "react-icons/bi";
import "./Style/Bus.css";

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

    return (

        <div>

        <div className={classes.root}>

            <Paper elevation={3}>

                <RecentSearchCity></RecentSearchCity>

                <div className="right-icon">
                    <BiChevronRight></BiChevronRight>
                </div>

                <div className="search-city-date">22nd Jul 2021</div>

            </Paper>

            <Paper elevation={3}>

                <RecentSearchCity></RecentSearchCity>

                <div className="right-icon">
                    <BiChevronRight></BiChevronRight>
                </div>

                <div className="search-city-date">22nd Jul 2021</div>
            </Paper>


            <Paper elevation={3}>

                <RecentSearchCity></RecentSearchCity>

                <div className="right-icon">
                    <BiChevronRight></BiChevronRight>
                </div>

                <div className="search-city-date">22nd Jul 2021</div>
            </Paper>

        </div>

        </div>
    )
}
