import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{title}</h2>
      {subTitle && (
        <p className="text-gray-500 text-sm md:text-base">{subTitle}</p>
      )}
    </div>
  );
};


export default Title
