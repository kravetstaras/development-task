import React from "react";
import { useFormik } from "formik";

type TypeForm = {
  name: string;
  onSubmit: (value) => void;
  submitTitle?: string;
};

const Form: React.FC<TypeForm> = ({
  name,
  onSubmit,
  submitTitle = "Submit",
}) => {
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

      <button type="submit">{submitTitle}</button>
    </form>
  );
};

export default Form;
