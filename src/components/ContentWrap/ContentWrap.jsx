import React from 'react';

const ContentWrap = ({ children }) => (
  <main className="flex flex-col flex-1 bg-sky-900 p-10 lg:p-15 w-full">
    {children}
  </main>
);

export default ContentWrap;