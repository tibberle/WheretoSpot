import { Button } from "@mui/material";
import Icon from "@mui/material/Icon";
import React from "react";
import { FormDropdownWith } from "../FormDropdownWith/FormDropdownWith";
import { FormInputWith } from "../FormInputWith/FormInputWith";
import { FormUploadWith } from "../FormUploadWith/FormUploadWith";
import { Logo } from "../Logo/Logo";
import "./style.css";

export const Components = () => {
  return (
    <div className="components">
      <div className="div-2">
        <div className="frame">
          <div className="text-wrapper-2">Buttons</div>

          <div className="frame-2">
            <Button variant="text">Label</Button>
            <Button variant="text">Label</Button>
            <Button variant="text">Label</Button>
            <Button variant="text">Label</Button>
          </div>
        </div>

        <div className="text-wrapper-3">Form</div>

        <div className="frame-3">
          <div className="text-wrapper-2">Icons / 32px</div>

          <div className="frame-4">
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
          </div>
        </div>

        <div className="frame-5">
          <div className="text-wrapper-2">Logo</div>

          <Logo className="logo-instance" />
        </div>

        <div className="frame-6">
          <div className="text-wrapper-2">Icons / 40px</div>

          <div className="frame-4">
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
          </div>
        </div>

        <div className="frame-7">
          <div className="text-wrapper-2">Icons / 24px</div>

          <div className="frame-4">
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
            <Icon baseClassName="material-icons-two-tone" />
          </div>
        </div>

        <FormInputWith className="form-input-with-label" />
        <FormDropdownWith
          className="form-dropdown-with-label"
          override={<Icon baseClassName="material-icons-two-tone" />}
        />
        <FormUploadWith
          className="form-upload-with-label"
          override={<Icon baseClassName="material-icons-two-tone" />}
        />
      </div>
    </div>
  );
};
