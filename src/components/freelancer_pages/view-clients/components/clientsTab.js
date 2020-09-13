import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core"
import { getDate } from '../../../../utils';
import Communication from "./communication"
import SearchIcon from "@material-ui/icons/Search";
// import useStyles from "./searchStyle";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      float: "right",
    },
    
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.9),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.9)
      },
      marginLeft: 0,
    //   width: "100%",
    width: "3ch",
        "&:focus": {
          width: "18ch",
          "border-bottom": "1px solid grey",
        },
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "3ch",
        "&:focus": {
          width: "18ch",
          "border-bottom": "1px solid grey",
        }
      }
    },
    searchIcon: {
      top: "-3px",
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "z-index": 10,
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      top: "-3px",
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
    //   width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "0",
        "&:focus": {
          width: "18ch",
          "border-bottom": "1px solid grey",
        }
      },
      width: "0",
        "&:focus": {
          width: "18ch",
          "border-bottom": "1px solid grey",
        }
    }
  }));


const ClientsTab = (props) => {
    const classes = useStyles();
    const { showActiveClients, searchHandle } = props
    let selectedClient = null;
    if (props.inactive === true) {
        if (Object.keys(props.showInactiveClientSelected).length > 0) {
            selectedClient = props.showInactiveClientSelected
        }
    }
    else if (Object.keys(props.showActiveClientSelected).length > 0) {
        selectedClient = props.showActiveClientSelected
    }
    let profileImage = null;
    if (selectedClient){
        if (selectedClient.user_profile.profile_image_folder_name){
            profileImage = `http://3.211.37.133/${selectedClient.user_profile.profile_image_folder_name}${selectedClient.user_profile.user_profile_image}`
        }

    }
    // React.useEffect(() => {
    //     selectedClient = props.showActiveClientSelected
    //   }, [props.showActiveClientSelected])
    console.log("selectedClient", props.showActiveClientSelected)
    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-md-4">
                    <Card className="mb-3 service_req_dash">
                        <CardHeader className="d-flex">
                            <h3 className="h5 m-0">Clients</h3>
                            <div className={classes.root}>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                    <SearchIcon />
                                    </div>
                                    <InputBase
                                        onChange={(e)=>searchHandle(e.target.value)}
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput
                                        }}
                                        inputProps={{ "aria-label": "search" }}
                                    />
                                </div>
                            </div>
                        </CardHeader>
                        {showActiveClients ? showActiveClients.map((client) => {
                            return (
                                <CardBody
                                    className="border_bottom right_sidesection"
                                    onClick={() => props.selecthandler(client)}
                                    key={"clients" + client.id}
                                >
                                    <div className="row mt-3">
                                        <div className="col-md-3 pb-4">
                                            <Avatar
                                                alt="Profile"
                                                src={client.user_profile.profile_image_folder_name ?
                                                    `http://3.211.37.133/${client.user_profile.profile_image_folder_name}${client.user_profile.user_profile_image}`: null}
                                                style={{ width: "50px", height: "50px" }}
                                                className="mx-auto mx-0"
                                            />
                                        </div>
                                        <div className="col-md-9" style={{ cursor: "pointer" }}>
                                            <p><strong>{client.user_profile.company_name}</strong></p>
                                            <p className="content2 small text-muted">{client.user_profile.full_name}</p>
                                        </div>
                                    </div>
                                </CardBody>
                            )
                        }) : null}
                    </Card>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <Card>
                                <CardHeader className="d-flex card_heading_dash">
                                    <h3 className="h5 m-0 main_h"><strong>Client Profile</strong></h3>
                                </CardHeader>
                                <CardBody>
                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <div className="w-100">
                                                <Avatar
                                                    alt="Profile"
                                                    src={profileImage} 
                                                    style={{ width: "80px", height: "80px" }}
                                                />
                                            </div>
                                            <div className="w-100 mt-3">
                                                <h5><strong>{selectedClient ? selectedClient.user_profile.company_name : null}</strong></h5>
                                                <h5 className="mt-1 small text-muted">{selectedClient ? selectedClient.user_profile.full_name : null}</h5>
                                                <h5 className="mt-1 small text-muted">{selectedClient ? selectedClient.user_profile.address : null}</h5>
                                            </div>
                                            {selectedClient ?
                                                <div className="w-100 mt-3 client_profile_h5">
                                                    <h5 className="mt-1"><strong><Link to="#">Service Proposal</Link></strong></h5>
                                                    <h5 className="mt-1"><strong><Link to="#">Project Management</Link></strong></h5>
                                                </div>
                                                : null}
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="w-100">
                                                                <p className="text-muted">From</p>
                                                            </div>
                                                            <div className="w-100">
                                                                <p>{selectedClient ? selectedClient.user_profile.country.name : null}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="w-100">
                                                                <p className="text-muted">In Business Since</p>
                                                            </div>
                                                            <div className="w-100">
                                                                <p>{selectedClient ?
                                                                    getDate(selectedClient.user_profile.created_at)
                                                                    : null}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-md-4">
                                                <div className="w-100">
                                                    <p className="text-muted">Avg. Response Rate</p>
                                                </div>
                                                <div className="w-100">
                                                    <p >1 hour</p>
                                                </div>
                                            </div> */}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <p className="text-muted">
                                                        {selectedClient ? selectedClient.user_profile.description : null}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>

                        <Communication selectedClient={selectedClient ? selectedClient : null} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientsTab;