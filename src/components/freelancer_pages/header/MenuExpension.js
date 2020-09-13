import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export const MenuExpension = props => {
  const { heading } = useStyles();
  const { drawerHandler, title, links } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={heading}>{title}</Typography>
      </ExpansionPanelSummary>
      {links.map(link => {
        return (
          <ExpansionPanelDetails key={link.id}>
            <Link onClick={drawerHandler} to={link.link}>
              {link.title}
            </Link>
          </ExpansionPanelDetails>
        );
      })}
    </ExpansionPanel>
  );
};

export default MenuExpension;
