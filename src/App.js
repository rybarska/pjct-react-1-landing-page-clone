/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import {
  faArchive,
  faArrowRight,
  faBookmark,
  faCaretDown,
  faCaretUp,
  faCog,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom';
import NavbarDropdown from 'react-navbar-dropdown';
import bg_hero from './images/bg_hero.png';
import chevron_down from './images/chevron_down.svg';
import Icon_BookTheme from './images/Icon_BookTheme.webp';
import Icon_CodeTheme from './images/Icon_CodeTheme.webp';
import Icon_QuestionOutlinedTheme from './images/Icon_QuestionOutlinedTheme.webp';
import Icon_SocialNetwork from './images/Icon_SocialNetwork.webp';
import { ReactComponent as Logo } from './images/logo.svg';
import Product_Auth from './images/Product_Auth.webp';
import Product_Connect from './images/Product_Connect.webp';

const upMostElementStyles = css`
  display: flex;
  justify-content: center;
  background-color: #f0ebfc;
  color: #4709b8;
  padding: 6px 0px;
  margin-left: 0px;
  font-size: 8px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border-top: 0.1px solid #cdc7d1;
`;

const mainStyles = css`
  background: white;
`;

const headerElementStyles = css`
  padding: 15px 20px;
  margin-left: auto;
  line-height: 2.4;
  padding: 0px 10px;
  text-decoration: none;
  display: flex;
  font-size: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const dropdownElementStyles = css`
  padding: 15px 20px;
  margin-left: 8px;
  line-height: 2.4;
  padding: 0px 10px;
  text-decoration: none;
  opacity: 0.5;
  display: flex;
  font-size: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const h1Styles = css`
  display: flex;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export default function App() {
  return (
    <div css={mainStyles}>
      <header>
        <div css={upMostElementStyles}>
          Get the Magic Connect SDK
          <FontAwesomeIcon icon={faArrowRight} fixedWidth />
        </div>
        <div css={headerElementStyles}>
          <Logo width="70" height="36" />
          <nav css={headerElementStyles}>
            <NavbarDropdown>
              <NavbarDropdown.Toggle
                onMouseEnter={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                onMouseLeave={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                title="Others"
                id="idofthiselement"
              >
                <div>
                  Products
                  <img id="Products chevron" src={chevron_down} alt="chevron" />
                </div>
                <NavbarDropdown.Open></NavbarDropdown.Open>
              </NavbarDropdown.Toggle>
              <NavbarDropdown.CSSTransitionMenu timeout={200}>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Connect}
                      alt="Product Connect"
                      width="17"
                      height="17"
                    />
                    Magic Connect
                    <br />
                    <a css={dropdownElementStyles}>Seamless Web3 onboarding</a>
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product Auth"
                      width="17"
                      height="17"
                    />
                    Magic Auth
                    <br />
                    <a css={dropdownElementStyles}>
                      Auth and wallet infrastructure
                    </a>
                  </div>
                </NavbarDropdown.Item>
              </NavbarDropdown.CSSTransitionMenu>
            </NavbarDropdown>

            <div css={headerElementStyles}>Pricing</div>

            <NavbarDropdown>
              <NavbarDropdown.Toggle
                onMouseEnter={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                onMouseLeave={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                title="Others"
                id="idofthiselement"
              >
                <div>
                  Developers
                  <img
                    id="Developers chevron"
                    src={chevron_down}
                    alt="chevron"
                  />
                </div>
                <NavbarDropdown.Open></NavbarDropdown.Open>
              </NavbarDropdown.Toggle>
              <NavbarDropdown.CSSTransitionMenu timeout={200}>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Icon_BookTheme}
                      alt="Icon Book Theme"
                      width="17"
                      height="17"
                    />
                    Documentation
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Icon_CodeTheme}
                      alt="Icon Code Theme"
                      width="17"
                      height="17"
                    />
                    Guides
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Icon_QuestionOutlinedTheme}
                      alt="Icon Question Outlined Theme"
                      width="17"
                      height="17"
                    />
                    Help Center
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Icon_SocialNetwork}
                      alt="Icon Social Network"
                      width="17"
                      height="17"
                    />
                    Github
                  </div>
                </NavbarDropdown.Item>
              </NavbarDropdown.CSSTransitionMenu>
            </NavbarDropdown>

            <NavbarDropdown>
              <NavbarDropdown.Toggle
                onMouseEnter={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                onMouseLeave={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                title="Others"
                id="idofthiselement"
              >
                <div>
                  Resources
                  <img
                    id="Resources chevron"
                    src={chevron_down}
                    alt="chevron"
                  />
                </div>
                <NavbarDropdown.Open></NavbarDropdown.Open>
              </NavbarDropdown.Toggle>
              <NavbarDropdown.CSSTransitionMenu timeout={200}>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Blog
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Whitepaper
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Compliance
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Privacy Policy
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Brand Assets
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Legal
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Security
                  </div>
                </NavbarDropdown.Item>
              </NavbarDropdown.CSSTransitionMenu>
            </NavbarDropdown>

            <NavbarDropdown>
              <NavbarDropdown.Toggle
                onMouseEnter={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                onMouseLeave={(e) =>
                  document.getElementById('idofthiselement').click()
                }
                title="Others"
                id="idofthiselement"
              >
                <div>
                  Company
                  <img id="Company chevron" src={chevron_down} alt="chevron" />
                </div>
                <NavbarDropdown.Open></NavbarDropdown.Open>
              </NavbarDropdown.Toggle>
              <NavbarDropdown.CSSTransitionMenu timeout={200}>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Events
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Careers
                  </div>
                </NavbarDropdown.Item>
                <NavbarDropdown.Item>
                  <div>
                    <img
                      src={Product_Auth}
                      alt="Product_Auth"
                      width="17"
                      height="17"
                    />
                    Contact us
                  </div>
                </NavbarDropdown.Item>
              </NavbarDropdown.CSSTransitionMenu>
            </NavbarDropdown>

            <div css={headerElementStyles}>Log&nbsp;in</div>
            <div css={headerElementStyles}>Start&nbsp;now</div>
          </nav>
        </div>
      </header>
      {/* <main>
        <section>
          <div css={mainStyles}>
            <h1>Web3</h1>
            <br>
            <h1>Infrastructure</h1>
            <br>
            <h1>Leaders</h1>
            <br></br>
            <img src={bg_hero} alt="hero" width="380" height="230" />
          </div>
        </section>
      </main> */}
    </div>
  );
}
