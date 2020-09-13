import React from "react";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
export const Popover = props => {
  return (
    <UncontrolledPopover placement="bottom" target={props.target}>
      <PopoverHeader>{props.title}</PopoverHeader>
      <PopoverBody>{props.children}</PopoverBody>
    </UncontrolledPopover>
  );
};

export default Popover;
