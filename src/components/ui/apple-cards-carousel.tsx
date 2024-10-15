import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  card: { title: string };
  handleClose: () => void;
}

const AppleCardsCarousel: React.FC<Props> = ({ open, card, handleClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const Modal = () => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-4 md:p-10 w-full max-w-5xl max-h-[90vh] overflow-auto m-4">
          <h2>{card.title}</h2>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    );
  };

  return (
    {open && isBrowser && ReactDOM.createPortal(
      <Modal />,
      document.body
    )}
  );
};

export default AppleCardsCarousel;
