import React from "react"
import classes from "./Navigation.module.css"

// Importing Icons
import HomeIcon from "@mui/icons-material/Home"
import GroupIcon from "@mui/icons-material/Group"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export default function Navigation() {
    return (
        <div className={`${classes.nav} flex-row justify-evenly align-center`}>
            <HomeIcon className={classes["nav-icon"]} />
            <GroupIcon className={classes["nav-icon"]} />
            <AccountCircleIcon className={classes["nav-icon"]} />
        </div>
    )
}
