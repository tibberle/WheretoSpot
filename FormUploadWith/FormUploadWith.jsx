import React from "react";
import { IconUpload } from "../IconUpload/IconUpload";
import "./form-upload-with.css";

export const FormUploadWith = ({
  className,
  override = <IconUpload className="icon-px-upload" />,
}) => {
  return (
    <div className={`form-upload-with ${className}`}>
      <div className="label-2">Label</div>

      <div className="field-2">
        <div className="input-3">Upload File</div>

        {override}
      </div>
    </div>
  );
};
