import React from 'react'
import { Link } from 'gatsby'

import { Container, Flex } from '../styles/globalStyles'
import { Nav, NavHeader, CloseNav, NavList, NavFooter} from '../styles/navigationStyles'

const Navigation = () => {
  return (
    <>
      <Nav>
        <Container>
          <NavHeader>
            <Flex spaveBetween noHeight>
              <h2>Project</h2>
              <CloseNav>
                <button>
                  <span></span>
                  <span></span>
                </button>
              </CloseNav>
            </Flex>
          </NavHeader>
          <NavList>
            <ul>
              <li>
                <Link to='/project/project-name'>
                  <div className="link">
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101 57"
                      >
                        <path
                          d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                          fill="#FFF"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    NOT HUNBLE
                  </div>
                </Link>
              </li>
            </ul>
          </NavList>
          <NavFooter></NavFooter>
        </Container>
      </Nav>
    </>
  )
}

export default Navigation
