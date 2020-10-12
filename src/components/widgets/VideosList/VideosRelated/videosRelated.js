import React from 'react';
import style from '../videosList.module.css'
import VideosListTemplate from '../VideosListTemplate';


const videosRelated = (props) => (
  <div className={style.relatedWrapper}>
    <VideosListTemplate
    data={props.data}
    teams={props.teams} />
    
  </div>

)






export default videosRelated;