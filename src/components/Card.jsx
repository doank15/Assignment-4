/* eslint-disable react/prop-types */
const Card = ({children,style}) => {
  return (
    <div className={`shadow-md ${style?.shadow} rounded-lg text-white hover:scale-105 duration-500`}>
      {children}
    </div>
  )
}

export default Card
