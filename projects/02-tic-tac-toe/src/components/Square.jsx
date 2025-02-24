
export const Square = ({ children, updateBoard, index, isSeleccted }) => {

    const className = `square ${isSeleccted ? 'is-selected' : ''}`
    
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }