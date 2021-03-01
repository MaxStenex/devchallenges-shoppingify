import "../../styles/components/AddItem.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import api from "../../api";

export const createItemSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, "Minimum 1 symbols.")
    .max(100, "Maximum 100 symbols.")
    .required("Name is required."),
  category: yup
    .string()
    .min(1, "Minimum 1 symbols.")
    .max(100, "Maximum 100 symbols.")
    .required("Category is required."),
  note: yup.string().max(100, "Maximum 100 symbols."),
  imageUrl: yup.string(),
});

export const AddItem = () => {
  return (
    <section className="add-item">
      <h2 className="add-item__title">Add a new item</h2>
      <Formik
        initialValues={{ name: "", note: "", imageUrl: "", category: "" }}
        validationSchema={createItemSchema}
        onSubmit={({ name, note, imageUrl, category }, { resetForm }) => {
          const createItem = async () => {
            try {
              await api.post("/items/create", {
                name,
                note,
                imageUrl: imageUrl || null,
                categoryTitle: category,
              });
              resetForm();
            } catch (err) {
              console.log(err.response.data.message);
            }
          };
          createItem();
        }}
      >
        {() => (
          <Form className="add-item__form">
            <div className="add-item__section">
              <label>Name</label>
              <Field name="name" placeholder="Enter a name" type="text" />
              <ErrorMessage name="name">
                {(msg) => <span className="add-item__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="add-item__section">
              <label>Note (optional)</label>
              <Field name="note" placeholder="Enter a note" type="text" />
              <ErrorMessage name="note">
                {(msg) => <span className="add-item__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="add-item__section">
              <label>ImageURL (optional)</label>
              <Field name="imageUrl" placeholder="Enter a url" type="text" />
              <ErrorMessage name="imageUrl">
                {(msg) => <span className="add-item__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="add-item__section">
              <label>Category</label>
              <Field name="category" placeholder="Enter a category" type="text" />
              <ErrorMessage name="category">
                {(msg) => <span className="add-item__error">{msg}</span>}
              </ErrorMessage>
            </div>
            <div className="add-item__buttons">
              <button className="add-item__button">cancel</button>
              <button type="submit" className="add-item__button add-item__button--orange">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
