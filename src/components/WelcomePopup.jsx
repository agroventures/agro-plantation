import '../../public/assets/css/master.css';

export default function WelcomePopup({ onClose }) {
  return (
    <>
      {/* Clickable backdrop */}
      <div className="modal-backdrop show" onClick={onClose} />

      {/* Popup container */}
      <div className="welcome-popup" role="dialog" aria-modal="true">
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close welcome popup"
        >
          &times;
        </button>

        <div className="image-wrapper">
          <img
            src="/images/great-place.jpg"
            alt="Welcome illustration"
            className="welcome-image"
          />
        </div>
      </div>
    </>
  );
}