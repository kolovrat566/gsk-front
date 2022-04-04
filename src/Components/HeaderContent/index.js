import './HeaderContent.scss'

export const HeaderContent = ({path, title, isSearch = false}) => {

  return (
    <div className='headerContent'>
      <div className="routes">{path}</div>
      <div className='headerContent_title'>{title}</div>
    </div>
  )
}