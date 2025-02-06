"use client"
import { Col, Container, Row } from "react-bootstrap";
import "./MiddleHeader.css";
import HeaderLogo from "./MiddleHeaderAtoms/HeaderLogo/HeaderLogo";
import HeaderSearch from "./MiddleHeaderAtoms/HeaderSearch/HeaderSearch";
import HeaderList from "./MiddleHeaderAtoms/HeaderList/HeaderList";
import { useState } from "react";
import SidebarMenu from "@/components/utils/SidebarMenu/SidebarMenu";
const MiddleHeader =({categories,token}) => {
  const [showSidebar,setShowSidebar]=useState(false);
  return (
    <section className="header-nav">
      <Container>
        <Row>
          <Col md={{ span: 4 }} lg={{ span: 2 }}>
            <HeaderLogo />
          </Col>
          <Col
            xs={{ span: 11 }}
            md={{ span: 6 }}
            lg={{ span: 3 }}
            xl={{ span: 4 }}
            xxl={{ span: 5 }}
          >
            <HeaderSearch />
          </Col>
          <Col
            xs={{ span: 1 }}
            md={{ span: 2 }}
            lg={{ span: 7 }}
            xl={{ span: 6 }}
            xxl={{ span: 5 }}
          >
            <HeaderList setShowSidebar={setShowSidebar} token={token}/>
          </Col>
        </Row>
        {showSidebar && (
          <SidebarMenu
            categories={categories}
            setShowSidebar={setShowSidebar}
            token={token}
          />
        )}
      </Container>
    </section>
  );
};

export default MiddleHeader;
