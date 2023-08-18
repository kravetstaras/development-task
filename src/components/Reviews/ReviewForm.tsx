import React from "react";
import { styled } from "styled-components";
import { useFormik } from "formik";
import ActionButton from "../common/ActionButton";
import { breakpoints, palette } from "../../styled-constants";
import Rating from "../common/Rating";
import { BUTTON_HEIGHT } from "../../constants";

type TypePopUpForm = {
  callback?: (value: boolean) => void;
  submitTitle: string;
};

const StyledPopUpForm = styled.div`
  background-color: ${palette.pure};
  border-radius: 2px;
  padding: 30px;

  h1 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    color: ${palette.dark};
  }

  div {
    margin-top: 25px;
    margin-bottom: 28px;
  }

  label {
    color: ${palette.dark};
    font-weight: 500;
    line-height: normal;
    font-size: 14px;
    margin-bottom: 5px;

    textarea {
      border-radius: 2px;
      border: 1px solid #e9eaf1;
      background: ${palette.pure};
      width: 100%;
      height: 120px;
      flex-shrink: 0;
      resize: none;
      margin-bottom: 25px;
    }

    input {
      display: block;
      border-radius: 2px;
      border: 1px solid #e9eaf1;
      background: ${palette.pure};
      width: 100%;
      height: 40px;
    }
  }

  .buttons-block {
    display: flex;
    gap: 10px;
    float: right;
  }
`;

export default function ReviewForm({ callback, submitTitle }: TypePopUpForm) {
  const handleClose = () => callback(false);

  const formik = useFormik({
    initialValues: {
      feedback: "",
      name: "",
    },
    onSubmit: (values) => {
      handleClose();
      alert(JSON.stringify(values, null, 2));
    },
  });
  // @ts-ignore
  return (
    <StyledPopUpForm>
      <form onSubmit={formik.handleSubmit}>
        <h1>Submit review</h1>
        {/* TODO: implement logic to change ratings marks with empty star svg */}
        <Rating rating={5} />
        <label>
          Review
          <textarea
            id="feedback"
            name="feedback"
            placeholder=""
            onChange={formik.handleChange}
            value={formik.values["feedback"]}
          />
        </label>
        <label>
          Full name
          <input
            id="name"
            name="name"
            placeholder=""
            onChange={formik.handleChange}
            value={formik.values["name"]}
          />
        </label>
        <div className="buttons-block">
          <ActionButton
            label={"Cancel"}
            height={BUTTON_HEIGHT.L}
            type="cancel"
            onClick={handleClose}
          />
          {/* @ts-ignore */}
          <ActionButton type="submit" height={BUTTON_HEIGHT.L}>
            {submitTitle}
          </ActionButton>
        </div>
      </form>
    </StyledPopUpForm>
  );
}
