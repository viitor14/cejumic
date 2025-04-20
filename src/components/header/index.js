import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaAngleLeft } from 'react-icons/fa6';

import { Head, Container, MenuNavigation, Navigate, ItemsNav, Overlay, ItemAdm } from './styled';

import menu from '../../assets/images/menu.png';
import search from '../../assets/images/search.png';
import notification from '../../assets/images/notification 1.png';
import iconDashboard from '../../assets/images/Icon-with-border.png';

import logo from './assets/images/filter.png';
import iconDoacao from './assets/images/iconDoacao.png';
import iconNewUser from './assets/images/iconNewUser.png';
import iconUser from './assets/images/iconUser.png';
import iconRelatorio from './assets/images/iconRelatorio.png';
import iconAdm from './assets/images/Admin-photo.png';

import * as actions from '../../store/modules/auth/actions';
import { toast } from 'react-toastify';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(actions.loginFailure());
    toast.success('Deslogado com sucesso');
  };

  return (
    <Head>
      {/*Menu de navegação */}
      {isMenuOpen && <Overlay onClick={toggleMenu} />}
      <MenuNavigation
        style={{ width: isMenuOpen ? '80vw' : '0', overflow: isMenuOpen ? 'visible' : 'hidden' }}>
        {/*Menu de navegação */}

        <Navigate>
          <div className="boxLogo">
            <div className="logo">
              <img src={logo} alt="" />
              <p>CEJUMIC</p>
            </div>
            <FaAngleLeft size={30} onClick={toggleMenu} />
          </div>

          <ItemsNav>
            <div className="itemsNav">
              <img src={iconDashboard} alt="" />
              <Link to="/Dashboard" onClick={closeMenu}>
                Dashboard
              </Link>
            </div>
            <div className="itemsNav">
              <img src={iconUser} alt="" />
              <Link to="/Beneficiario" onClick={closeMenu}>
                Beneficiários
              </Link>
            </div>
            <div className="itemsNav">
              <img src={iconDoacao} alt="" />
              <Link to="/Doações" onClick={closeMenu}>
                Doações
              </Link>
            </div>
            <div className="itemsNav">
              <img src={iconNewUser} alt="" />
              <Link to="/Voluntários" onClick={closeMenu}>
                Voluntários
              </Link>
            </div>
            <div className="itemsNav">
              <img src={iconRelatorio} alt="" />
              <Link to="/Relatório" onClick={closeMenu}>
                Relatórios
              </Link>
            </div>
          </ItemsNav>
        </Navigate>
        <ItemAdm>
          <img src={iconAdm} alt="" />
          <div onClick={handleLogout}>
            <p>Centro de Inclusão</p>
            <p>Administrador</p>
          </div>
        </ItemAdm>
      </MenuNavigation>
      <div>
        <img src={menu} alt="menu-icon" className="menuIcon" onClick={toggleMenu} />
      </div>

      <Container>
        <div className="lupa">
          <img src={search} alt="lupa" className="searchIcon" />

          <input type="text" placeholder="Pesquisar..." className="barraPesquisa" />
        </div>
      </Container>

      <div>
        <img src={notification} alt="notification" className="notification" />
      </div>
    </Head>
  );
}
