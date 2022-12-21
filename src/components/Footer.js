import React from 'react';
import { CDBBox, CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import "../styles/footer.scss"
const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap fix-footer"
        style={{ width: '80%', justifyContent:"center!important" }}
      >
        <CDBBox display="flex" alignItems="center">
          <small className="ml-2">&copy; CinéVie, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex" alignItems="center">
          <img src="logo.png"/>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer ;