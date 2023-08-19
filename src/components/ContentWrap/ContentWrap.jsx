import React from 'react';

export const ContentWrap = ({children}) => {
  return (
    <main className="flex flex-col flex-[1] bg-slate-700 p-10 lg:p-20 w-full">
        {children}
    </main>
  )
}
