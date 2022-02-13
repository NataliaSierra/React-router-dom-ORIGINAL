import React from 'react';
import { LayFooter } from '../Layouts/LayFooter/LayFooter.jsx';
import { LayHeader } from '../Layouts/LayHeader/LayHeader.jsx';
import { LayMain } from '../Layouts/LayMain/LayMain.jsx';


export const HomePage = () => {
  return (
      <>
      <LayHeader />
      <LayMain />
      <LayFooter />
      </>
  )
};
