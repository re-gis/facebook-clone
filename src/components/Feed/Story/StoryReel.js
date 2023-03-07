import React from 'react'
import './StoryReel.css'
import Story from './Story'

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story className="storyReel_story"
        title="Regis D"
        profileSrc="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
        image="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2022/11/andy-holmes-fwn5b2akjya-unsplash.jpg"
      />
      <Story className="storyReel_story"
        title="Beni Divin"
        profileSrc="https://media.istockphoto.com/id/1432668060/photo/eiffel-tour-and-paris-cityscape.jpg?b=1&s=170667a&w=0&k=20&c=RMBc6iIr3rq3o0HRYLSX9s64hH_lyqzUexhtYgkAZAk="
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      />
      <Story className="storyReel_story"
        title="Ange Benoitte"
        profileSrc="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg"
        image="https://i.pinimg.com/originals/9d/ac/6d/9dac6df377d1b1f9be23ad8f38d535a1.jpg"
      />
     
    </div>
  );
}

export default StoryReel
