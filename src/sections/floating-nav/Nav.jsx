

const Nav = ({item, className}) => {
  return (
    <li className={className}><a href={item.link}>{item.icon}</a></li>
  )
}

export default Nav
