import React from 'react'
import Metric from './Metric';

const ContentRowMovies = () => {

  const metrics = [
    {
      title: 'Movies',
      color: 'primary',
      icon: ' fa-film',
      data: 21 
    },
    {
      title: 'Awards',
      color: 'success', 
      icon: ' fa-award', 
      data: 79
    },
    {
      title: "Users",
      color: 'warning', 
      icon: ' fa-user',
      data: 49
    }
  ]
  
  return (
      
        <div className="row">
          
          {
            metrics.map((metric, index) => (
              <Metric {...metric} key={metric.title + index}/>
            ))
          }
          
        </div>

  )
}

export default ContentRowMovies
