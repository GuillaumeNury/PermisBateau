import React from "react"

const ImageChallenge = ({
  category,
  width,
  height,
  backgroundImage,
  backgroundPosition,
  children,
}) => {
  return (
    <div>
      <div
        style={{
          margin: "1rem auto 2rem auto",
          width,
          height,
          backgroundImage: `url("${backgroundImage}")`,
          backgroundPosition,
        }}
      ></div>
      <div style={{ textAlign: "center" }}>
        <b>{category}</b>
      </div>
      {children}
    </div>
  )
}

const TextChallenge = ({ question, children }) => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <b>{question}</b>
      </div>
      <div>{children}</div>
    </div>
  )
}

const Challenge = ({ level, children }) => {
  return level.type === "image" ? (
    <ImageChallenge
      category={level.category}
      backgroundImage={level.image}
      backgroundPosition={`left -${level.left}px top -${level.top}px`}
      width={`${level.width}px`}
      height={`${level.height}px`}
    >
      {children}
    </ImageChallenge>
  ) : level.type === "text" ? (
    <TextChallenge question={level.question}>{children}</TextChallenge>
  ) : null
}

export default Challenge
