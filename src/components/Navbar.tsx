import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>
      <NavBrand>
        <Link to="/">Portfolio</Link>
      </NavBrand>
      <NavLinks>
        <Link to="/">Главная</Link>
        <Link to="/projects">Проекты</Link>
        <Link to="/contact">Контакты</Link>
      </NavLinks>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  color: white;
`

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    &:hover {
      color: var(--secondary);
    }
  }
`

export default Navbar 