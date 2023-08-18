import React from "react";
import { useFormik } from "formik";

import ActionButton from "../common/ActionButton";
import { BUTTON_HEIGHT } from "../../constants";

type TypeSummaryForm = {
  name: string;
  onSubmit: (value) => void;
  submitTitle?: string;
};

export default function SummaryForm({
  name,
  onSubmit,
  submitTitle = "Submit",
}: TypeSummaryForm) {
  const formik = useFormik({
    initialValues: {
      contactField: "",
    },
    onSubmit: (values) => {
      onSubmit(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        id={name}
        name={name}
        placeholder="Hello, I'm interested in working with you on our social campaigns..."
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      {/* @ts-ignore */}
      <ActionButton type="submit" height={BUTTON_HEIGHT.L}>
        {submitTitle}
      </ActionButton>
    </form>
  );
}
