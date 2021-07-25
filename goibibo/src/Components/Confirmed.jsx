import confirmedIcon from "../images/confirmed.svg";
import styles from "../Components/Confirmed.module.css";
import {Link} from "react-router-dom";

function Confirmed(){
    return (
        <>
        <div style={{textAlign: "center", marginTop: "2%"}}>
            <img width="300px" src={confirmedIcon} alt="1" />
            <h1>Congratulations! Your booking is confirmed</h1>
            <Link to="/">
                <button className={styles.btn}>Continue Exploring</button>
            </Link>
        </div>
        </>
    )
}
export default Confirmed;