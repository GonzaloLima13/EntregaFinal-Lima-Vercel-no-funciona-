import React from 'react';

const CartTotal = ({ total }) => {
  return (
    <div className="fixed bottom-5 right-5 bg-slate-800 p-5 rounded-lg shadow-md">
      <p className="text-white font-semibold">Total: ${total.toLocaleString('es-CL')}</p>
    </div>
  );
};

export default CartTotal;
