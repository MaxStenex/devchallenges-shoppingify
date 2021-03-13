import "../../../styles/components/CancelListPopup.scss";

type Props = {
  closeCancelPopup: () => void;
  saveListInHistory: (status: string) => Promise<void>;
};

export const CancelListPopup: React.FC<Props> = ({
  closeCancelPopup,
  saveListInHistory,
}) => {
  const onYesButtonClick = () => {
    closeCancelPopup();
    saveListInHistory("cancelled");
  };

  return (
    <div className="cancel-list">
      <div className="cancel-list__wrapper">
        <button onClick={closeCancelPopup} className="cancel-list__close">
          x
        </button>
        <h2 className="cancel-list__title">
          Are you sure that you want to cancel this list?
        </h2>
        <div className="cancel-list__buttons">
          <button onClick={closeCancelPopup} className="cancel-list__cancel">
            cancel
          </button>
          <button onClick={onYesButtonClick} className="cancel-list__yes">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
