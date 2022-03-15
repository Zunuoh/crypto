import React from 'react'
import {Row, Col} from 'react-bootstrap'
import DashHeader from './DashHeader'
import DashOne from './DashOne'
const Dashboard = () => {
    return (
        <div>
  <DashHeader/>
  <Row>
    <Col style = {{backgroundColor:"#F7F7F7"}}>
    <DashOne/>
    </Col>
    <Col xs={8}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
        </div>
    )
}

export default Dashboard
