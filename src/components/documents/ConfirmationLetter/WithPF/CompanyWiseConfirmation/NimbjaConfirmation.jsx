import React from 'react'
import A4Page from '../../../../layout/A4Page'

const NimbjaConfirmation = ({ company, data }) => {
  return (
    <>
    <A4Page headerSrc={company.header} footerSrc={company.footer}
    ></A4Page>
    </>

  );
}

export default NimbjaConfirmation
