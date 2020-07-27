import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardBody, Input, Row, Col} from 'reactstrap'

const Header = (props) => {
  return (
    <Row className={`d-flex align-items-center ${props.className}`}>
      <Col md={4} className="mb-lg-0 mb-3">
        <h2 className="title">{props.title}</h2>
      </Col>
      <Col md={8} className="d-flex mb-lg-0 mb-2">
        <Card className="w-100">
          <CardBody className="p-3">
            <Input placeholder="Search" type="search" />
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.node,
  className: PropTypes.string,
}

Header.defaultProps = {
  title: 'Waiting for Data...',
  subTitle: 'Waiting for Data...',
  className: 'my-3',
}

export default Header
