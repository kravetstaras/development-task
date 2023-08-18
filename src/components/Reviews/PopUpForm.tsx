import React from "react";
import { styled } from "styled-components";
import { useFormik } from "formik";
import ActionButton from "../common/ActionButton";
import { palette } from "../../styled-constants";
import Rating from "../common/Rating";
import { BUTTON_HEIGHT } from "../../constants";

type TypePopUpForm = {
  onSubmit: () => void;
  submitTitle: string;
};

const StyledButton = styled(ActionButton)`
  background-color: ${palette.pure};
  color: ${palette.dark};
`;

const StyledPopUpForm = styled.section`
  background-color: ${palette.pure};
  border-radius: 2px;
  padding: 30px;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    color: ${palette.dark};
  }

  p {
    color: ${palette.dark};
    font-size: 14px;
  }

  input,
  textarea {
  }
`;

export default function PopUpForm(
  onSubmit,
  submitTitle = "Submit"
): TypePopUpForm {
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
    <StyledPopUpForm>
      <form onSubmit={formik.handleSubmit}>
        <h1>Submit review</h1>
        <Rating rating={3} />
        <p>Review</p>
        <textarea
          id="feedback"
          name="feedback"
          placeholder="H"
          onChange={formik.handleChange}
          value={formik.values["feedback"]}
        />
        <p>Full name</p>
        <input id="name" name="name" />
      </form>
      <div className="buttons-block">
        <StyledButton />
        {/* @ts-ignore */}
        <ActionButton type="submit" height={BUTTON_HEIGHT.L}>
          {submitTitle}
        </ActionButton>
      </div>
    </StyledPopUpForm>
  );
}
