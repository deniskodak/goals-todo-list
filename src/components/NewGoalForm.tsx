import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useCallback, type FC } from "react";
import * as Yup from "yup";

enum NewGoalFields {
  GOAL = "goal",
  DESCRIPTION = "description",
}

export interface NewGoalFormValues {
  goal: string;
  description: string;
}

type NewGoalFormProps = {
  onAdd: (goal: NewGoalFormValues) => void;
};

const initialValues: NewGoalFormValues = {
  goal: "",
  description: "",
};

const validationSchema = Yup.object({
  [NewGoalFields.GOAL]: Yup.string().required("Required"),
  [NewGoalFields.DESCRIPTION]: Yup.string().required("Required"),
});

const NewGoalForm: FC<NewGoalFormProps> = ({ onAdd }) => {
  const handleSubmit = useCallback(
    (values: NewGoalFormValues, helpers: FormikHelpers<NewGoalFormValues>) => {
      onAdd(values);
      helpers.resetForm();
    },
    [onAdd]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => {
        return (
          <Form {...props}>
            <div className="form-control">
              <label htmlFor="firstName">Your Goal</label>
              <Field
                name={NewGoalFields.GOAL}
                type="text"
                placeholder="Ex: Lear React"
              />
              <ErrorMessage name={NewGoalFields.GOAL} />
            </div>

            <div className="form-control">
              <label htmlFor="lastName">Your summary</label>
              <Field
                name={NewGoalFields.DESCRIPTION}
                type="text"
                placeholder="Ex: Write PET application"
              />
              <ErrorMessage name={NewGoalFields.DESCRIPTION} />
            </div>
            <button type="submit" disabled={props.isSubmitting}>
              Save
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default NewGoalForm;
