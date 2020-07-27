import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import iconEdit from 'images/commonIcons/edit.svg'

const useStyles = makeStyles({
  imageSize: {
    height: 15,
    width: 15,
    marginLeft: 3.5,
  },
  imgSize: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  imgSizeDetails: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
  imageSizeRemove: {
    height: 16,
    width: 16,
    marginLeft: 3.5,
  },
  editIcon: {
    height: 10.9,
    width: 10,
    marginLeft: 3.5,
  },
  bkgrdImgSize: {
    width: 25,
    height: 27.2,
    borderRadius: 50,
    backgroundColor: '#E6E0DD',
  },
})

const CustomIcon = () => {
  
  const classes = useStyles()

  return (
    <span>
      <div className={classes.bkgrdImgSize}>
        <img src={iconEdit} className={classes.editIcon} />
      </div>
    </span>
  )
}

export default CustomIcon