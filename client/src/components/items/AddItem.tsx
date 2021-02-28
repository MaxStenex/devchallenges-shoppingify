import "../../styles/components/AddItem.scss";

export const AddItem = () => {
  return (
    <section className="add-item">
      <h2 className="add-item__title">Add a new item</h2>
      <form className="add-item__form">
        <div className="add-item__section">
          <label>Name</label>
          <input placeholder="Enter a name" type="text" />
        </div>
        <div className="add-item__section">
          <label>Note (optional)</label>
          <input placeholder="Enter a note" type="text" />
        </div>
        <div className="add-item__section">
          <label>Image (optional)</label>
          <input placeholder="Enter a url" type="text" />
        </div>
        <div className="add-item__section">
          <label>Category</label>
          <input placeholder="Enter a category" type="text" />
        </div>
        <div className="add-item__buttons">
          <button className="add-item__button">cancel</button>
          <button className="add-item__button add-item__button--orange">Save</button>
        </div>
      </form>
    </section>
  );
};
