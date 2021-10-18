import React from 'react';
import FormDialog from "./FormDialog.jsx";
import BasicMenu from "./BasicMenu.jsx";
import BasicModal from "./BasicModal.jsx";
import TransitionsModal from "./TransitionsModal.jsx";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <FormDialog />
    <BasicMenu />
    <BasicModal />
    <TransitionsModal />
  </div>
);
