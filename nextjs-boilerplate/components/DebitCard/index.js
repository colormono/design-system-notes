import React from 'react';

export default ({ item, selected, onSelection }) => {
  const { cardType, cardBank, cardNumber, cardProvider } = item;

  const handleClick = () => {
    onSelection(cardNumber);
  };

  return (
    <div
      className={`block border-2 border-${
        selected ? 'green' : 'gray'
      }-500 rounded-lg bg-white max-w-sm p-4 hover:border-green-300 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div className="mr-4 uppercase bg-blue-800 rounded-md text-white text-xs font-bold py-2 w-12 text-center">{cardProvider}</div>
        <div className="flex-grow">
          <div className="font-bold">
            {cardType} {cardBank}
          </div>
          <div>{cardNumber}</div>
        </div>
        {selected ? <div className="text-green-500">√</div> : null}
      </div>
    </div>
  );
};
