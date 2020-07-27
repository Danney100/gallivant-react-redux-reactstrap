import React, {useEffect, useContext, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardBody, Input, Col, Row} from 'reactstrap'

import iconSearch from 'images/commonIcons/search.svg'
import AppContext from 'components/App/AppContext'
import CommonButton from 'routes/components/CommonButton'
import CompensationTable from './components/CompensationTable'
import Filter from './components/Filter'
import Heading from './components/Heading'

const useStyles = makeStyles({
  root: {
    '& .title': {
      fontSize: '32px',
      color: '#403839',
      fontFamily: 'DINCondensed-Bold',
    },
    '& .searchIcon': {
      backgroundImage: `url(${iconSearch})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundOrigin: 'content-box',
    },
    '& .pointer': {
      cursor: 'pointer',
    },
    '& .dropdown-menu': {
      boxShadow: '0 10px 30px 0 #d9d7d6',
    },
    '& .filter': {
      color: '#403839',
      fontFamily: 'SFUIText-Semibold',
    },
    '& .filter-input': {
      position: 'relative',
    },
    '& .active-filter': {
      color: '#de8b6d',
    },
  },
})

const CompensationRuns = () => {
  const classes = useStyles()
  const [searchVal, setSearchVal] = useState('')

  const context = useContext(AppContext)
  const {setTitle} = context
  useEffect(() => {
    setTitle('Compensation > Compensation Run ')
  }, [])

  return (
    <div className={`${classes.root} px-3 px-lg-0 mt-2 mt-lg-0`}>
      <Heading />
      <Card className="my-3">
        <CardBody className="p-0">
          <Row className="pl-4 pr-4 pt-4 pb-0">
            <Col>
              <Filter />
            </Col>
            <Col xs="3" sm="3">
              <Input
                type="search"
                placeholder="search"
                onChange={(e) => setSearchVal(e.target.value)}
                className={`${!searchVal && 'searchIcon'}`}
              />
            </Col>
          </Row>
          <hr />
          <CompensationTable />
        </CardBody>
      </Card>
      <div className="d-flex justify-content-end mb-3">
        <CommonButton title="Compensation Plan Document" buttonType="addItemButton" />
      </div>
    </div>
  )
}

export default CompensationRuns
