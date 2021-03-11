import "../../../styles/components/AddItem.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import api from "../../../api";
import { SidebarComponents } from "./";
import { useContext, useMemo, useRef, useState } from "react";
import { ItemsContext } from "../../../state/items/context";
import { addItem } from "../../../state/items/actions";
import { Product } from "../../../types";
import { useEffect } from "react";

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

type Props = {
  changeSidebarComponent: (componentName: SidebarComponents) => void;
};

export const AddItem: React.FC<Props> = ({ changeSidebarComponent }) => {
  const { itemsState, itemsDispatch } = useContext(ItemsContext);
  const namesOfCategories = useMemo(
    () =>
      itemsState.categories.reduce<string[]>((acc, curr) => {
        acc.push(curr.title);
        return acc;
      }, []),
    [itemsState.categories]
  );

  const [categoriesPopupOpened, setCategoriesPopupOpened] = useState(false);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onCategoryInputClick = (evt: any) => {
      if (evt.path.includes(categoryInputRef.current)) {
        setCategoriesPopupOpened(true);
      } else {
        setCategoriesPopupOpened(false);
      }
    };
    document.addEventListener("click", onCategoryInputClick);

    return () => {
      document.removeEventListener("click", onCategoryInputClick);
    };
  }, []);

  const changeSidebarComponentOnShoppingList = () => {
    changeSidebarComponent(SidebarComponents.ShoppingList);
  };

  return (
    <section className="add-item">
      <h2 className="add-item__title">Add a new item</h2>
      <Formik
        initialValues={{ name: "", note: "", imageUrl: "", category: "" }}
        validationSchema={createItemSchema}
        onSubmit={({ name, note, imageUrl, category }, { resetForm }) => {
          const createItem = async () => {
            try {
              const res = await api.post("/items/create", {
                name,
                note,
                imageUrl: imageUrl || null,
                categoryTitle: category,
              });

              const data = res.data;
              const newItem: Product = {
                id: data.id,
                imageUrl: data.imageUrl,
                note: data.note,
                name: data.name,
              };
              itemsDispatch(addItem(newItem, category));

              resetForm();
            } catch (err) {
              console.log(err.response.data.message);
            }
          };
          createItem();
        }}
      >
        {({ setValues, getFieldProps }) => (
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
              <input
                autoComplete="off"
                {...getFieldProps("category")}
                ref={categoryInputRef}
                placeholder="Enter a category"
                type="text"
              />
              <ErrorMessage name="category">
                {(msg) => <span className="add-item__error">{msg}</span>}
              </ErrorMessage>
              {namesOfCategories.length > 0 && (
                <ul
                  className={`add-item__categories  ${
                    categoriesPopupOpened ? "add-item__categories--visible" : ""
                  }`}
                >
                  {namesOfCategories.map((name) => (
                    <li
                      onClick={() =>
                        setValues((values) => ({ ...values, category: name }))
                      }
                      key={name}
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="add-item__buttons">
              <button
                onClick={changeSidebarComponentOnShoppingList}
                type="button"
                className="add-item__button"
              >
                cancel
              </button>
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
