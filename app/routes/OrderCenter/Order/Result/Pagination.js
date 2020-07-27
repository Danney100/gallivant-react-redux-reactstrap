import React from 'react'
import {
  Row,
  Col,
  FormGroup,
  Pagination,
  Label,
  Input,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  paginationarrow: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
    width: 32,
    marginLeft:2,
    borderRadius:5,
  },
  pagination: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Semibold',
  },
  pagination1: {
    width: 100,
    height: 40,
    fontSize: '14px',
    color: '#6c6766', 
    fontFamily: 'SFUIText-Semibold',
  },
  font: {
    height: 40,
    fontSize: '14px',
    color: '#6c6766',
    fontFamily: 'SFUIText-Medium',
    marginTop: 8,
  },
  paginationnum: {
    width: 55,
    height: 40,
    fontSize: '14px',
    color: '#ffffff',
    fontFamily: 'Avenir-Heavy',
    backgroundColor:'#6c6766',
    marginLeft:2,
    borderRadius:5,
  },
})

export const SearchResult = () => {
  const classes = useStyles()

  return (
    <Row form className="d-flex justify-content-between ml-3 mr-4">
      <Col md={10} className="d-flex justify-content-start">
        <FormGroup row className="mr-md-2 mx-3">
          <Pagination className="mt-3" aria-label="Page navigation example">
            <PaginationItem disabled>
              <PaginationLink className={classes.paginationarrow} first />
            </PaginationItem>
            <PaginationItem disabled>
              <PaginationLink className={classes.paginationarrow} previous />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationnum}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem></PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationarrow} next />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className={classes.paginationarrow} last />
            </PaginationItem>
          </Pagination>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            className={`${classes.pagination1} ml-4 mt-3`}>
            <option>5</option>
            <option>10</option>
          </Input>
          <p className={`${classes.font} ml-2 mt-4`}>items per page</p>
        </FormGroup>
      </Col>
      <Col md={{size: 2, offset: 6}} className={`${classes.font} mx-sm-0  mt-4 d-flex justify-content-end`}>
        <FormGroup>
          <Label>1-10 of 500 items</Label>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default SearchResult
