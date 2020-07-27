import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  addButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  addItemButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3 !important',
    },
    width: 240,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  cancelItemButton: {
    backgroundColor: '#6c6766',
    borderColor: '#6c6766',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6c6766 !important',
      borderColor: '#6c6766 !important',
    },
    width: 240,
    height: 40,
    fontSize: 13,
  },

  filterButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766 !important',
    },
    width: 147,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  saveButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  saveModalButton: {
    backgroundColor: '#27BFA3',
    borderColor: '#27BFA3',
    marginLeft: 30,
    '&:hover': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    '&:focus': {
      backgroundColor: '#27BFA3 !important',
      borderColor: '#27BFA3',
    },
    width: 135,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },

  cancelButton: {
    marginLeft: 30,
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  cancelModalButton: {
    marginLeft: 30,
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 130,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  continueButton: {
    backgroundColor: '#E94B35',
    borderColor: '#E94B35',
    '&:hover': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    '&:focus': {
      backgroundColor: '#E94B35 !important',
      borderColor: '#E94B35',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
  orderButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 236,
    height: 40,
    whiteSpace: 'normal!important',
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: 15,
    fontFamily: 'Oswald-SemiBold',
    ['@media (max-width:350px)']: {
      width: '100%',
    },
    ['@media (max-width:764px)']: {
      width: '100%',
      marginLeft: '20px',
      marginRight: '20px',
    },
  },
  orderMakeButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 236,
    height: 40,
    whiteSpace: 'normal!important',
    marginRight: '10px',
    marginLeft: '10px',
    fontSize: 15,
    fontFamily: 'Oswald-SemiBold',
    ['@media (max-width:350px)']: {
      width: '100%',
    },
    ['@media (max-width:764px)']: {
      width: '100% !important',
      marginLeft: '20px',
      marginRight: '20px',
      height: '40px !important',
    },
    ['@media (max-width:874px)']: {
      height: 80,
      width: '85%',
      fontSize: 14,
    },
    ['@media (max-width:1024px)']: {
      height: 80,
    },
  },
  refundButton: {
    backgroundColor: '#6C6766',
    borderColor: '#6C6766',
    '&:hover': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    '&:focus': {
      backgroundColor: '#6C6766 !important',
      borderColor: '#6C6766',
    },
    width: 160,
    height: 40,
    fontSize: 14,
    marginRight: 10,
    color: '#ffffff',
    fontFamily: 'Avenir-Heavy',
  },
  addpayButton: {
    backgroundColor: '#28bfa3',
    borderColor: '#28bfa3',
    '&:hover': {
      backgroundColor: '#28bfa3 !important',
      borderColor: '#28bfa3',
    },
    '&:focus': {
      backgroundColor: '#28bfa3 !important',
      borderColor: '#28bfa3',
    },
    width: 160,
    height: 40,
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Avenir-Heavy',
  },
  exportItmButton: {
    backgroundColor: '#de8b6d',
    borderColor: '#de8b6d',
    '&:hover': {
      backgroundColor: '#de8b6d !important',
      borderColor: '#de8b6d',
    },
    '&:focus': {
      backgroundColor: '#de8b6d !important',
      borderColor: '#de8b6d',
    },
    width: 180,
    height: 40,
    fontSize: 13,
    fontFamily: 'SFUIText-Heavy',
  },
})

const CommonButton = (props) => {
  const {title, onClick, buttonType, wrapperClass} = props
  const classes = useStyles()
  return (
    <Button onClick={onClick} className={`${classes[buttonType]} ${wrapperClass}`}>
      {title}
    </Button>
  )
}

CommonButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string,
}

CommonButton.defaultProps = {
  wrapperClass: '',
}

export default CommonButton
