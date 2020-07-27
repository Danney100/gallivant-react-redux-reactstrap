import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Container, Row, Col} from 'components'

import Header from './Header'
import Player from './Player'
import {useContext} from 'react'
import AppContext from 'components/App/AppContext'
import {useEffect} from 'react'

const useStyles = makeStyles({
  root: {
    '& .card': {
      border: 'none',
      borderRadius: '5px',
      boxShadow: '0 3px 15px 0 rgba(195, 185, 185, 0.12)',
    },
    '& .r-player > div > iframe': {
      borderRadius: '5px',
    },
    '& .title': {
      fontFamily: 'Oswald-Semibold',
      fontWeight: 'bold',
    },
  },
})

const ImagesResults = () => {
  const classes = useStyles()
  const context = useContext(AppContext)
  const {setTitle} = context

  useEffect(() => {
    setTitle('Videos > Vimeo')
  }, [])

  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Compensation Requirements Review 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Compensation Requirements Review 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Initial Comp Review Call 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Initial Comp Review Call 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Compensation Requirements Review 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Initial Comp Review Call 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Compensation Requirements Review 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Compensation Requirements Review 8-17-2020',
    },
    {
      url: 'https://www.youtube.com/watch?v=LifsS_rimx0',
      description: 'Initial Comp Review Call 8-17-2020',
    },
  ]

  return (
    <div className={`${classes.root} px-lg-0 px-3`}>
      <Header title="Videos" />
      <Row>
        {videos.map((video, index) => (
          <Col sm={6} lg={4} key={index}>
            <Player url={video.url} description={video.description} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ImagesResults
