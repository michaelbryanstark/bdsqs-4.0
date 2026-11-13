import React, { useEffect, useRef } from 'react';

function Modal({ clickedImg, setClickedImg, alt = 'Credential' }) {
  const closeRef = useRef(null);
  const close = () => setClickedImg(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setClickedImg(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [setClickedImg]);

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={alt} onClick={close}>
      <button ref={closeRef} className="overlay__close" type="button" aria-label="Close" onClick={close}>
        ×
      </button>
      <img src={clickedImg} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default Modal;
