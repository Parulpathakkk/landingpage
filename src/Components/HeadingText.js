import React from 'react';
function HeadingText({ aosType, aosDuration, subHeading, heading, color }){
    const textColor = color === 'white' ? 'text-white' : 'text-darkBlue';
    return (
        <div data-aos={aosType} data-aos-duration={aosDuration}>
      <p className={`text-24 ${textColor} opacity-70 font-400 text-center`}>
        {subHeading}
      </p>
      <h2 className={`text-36 ${textColor} font-semibold text-center`}>
        {heading}
      </h2>
    </div>
    )
}

export default HeadingText;