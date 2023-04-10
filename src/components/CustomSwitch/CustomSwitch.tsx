import { Switch } from '@mui/material';
import styles from "./CustomSwitch.module.css";


export const CustomSwitch = () => {
    return (
        <div className={styles.container} >
            <span>English </span>
            <Switch defaultChecked />
            <span>Español </span>
        </div>
    )
}


