import React from 'react';
import DebitCard from './DebitCard';

export default (props) => {
  const { items, selected, onSelection } = props;

  if (items?.length === 0) return <div>Please, add some items!</div>;

  return (
    <section className="section flex flex-col space-y-2 lg:space-y-4">
      {items.map((item) => (
        <DebitCard key={item.cardNumber} item={item} selected={item.cardNumber === selected} onSelection={onSelection} />
      ))}
    </section>
  );
};
