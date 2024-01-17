import React, { useState,useEffect,useRef } from 'react'
import {Navbar,HamburgerMenu,Content,Footer} from './styles'
import logo from '../../../../public/logo.png'
import img1 from '../../IMG/img1.jpg'
import revisao from '../../IMG/revisao.jpg'
import trocaoleo from '../../IMG/trocaoleo.jpg'
import motor from '../../IMG/motor.jpg'
import mercedesgrande from '../../IMG/mercedesgrande.jpg'
import sobre from '../../IMG/sobre.jpg'
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import { FaFan } from "react-icons/fa";
import { TbEngine } from "react-icons/tb";
import { BiSolidCarMechanic } from "react-icons/bi";

import { Link } from 'react-scroll';

const Home = () => {

    const mensagemForm=()=>{
        setFormulario( <div className="formulario">
            <h4 id='contato'>Obrigado,logo entraremos em contato!</h4>
        </div>)
    }

    const[formulario,setFormulario]=useState(
        <div className="formulario" id='contato'>
            <h1>Ligamos para você</h1>  
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name'/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' />
            </div>
            <div>
                <label htmlFor="numero">Telefone</label>
                <input type="text" name='numero' />
            </div>
            <button onClick={()=>mensagemForm()}>Enviar</button>
        </div>
    )

    const [larguraDaTela, setLarguraDaTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraDaTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
  
        if (scrollPosition > scrollThreshold) {
          setTransparentNavbar(false);
        } else {
          setTransparentNavbar(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);

      };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [transparentNavbar, setTransparentNavbar] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
        <>
            <Navbar transparent={transparentNavbar}>
                <div className='logo-box'>
                    <img src={logo} alt="Logo da oficina" />
                    <h1>AUTOLUXO MERCEDES</h1>
                </div>
                <HamburgerMenu>
                    <input type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
                    <label htmlFor="menu-toggle" id="menu-icon">
                        {menuOpen?<MdMenuOpen color='#001f3f'/>:<MdOutlineMenu color='#001f3f'/>}
                    </label>
                    <div id="menu" className={menuOpen ? 'open' : ''}>
                        <ul>
                            <li><Link to='sobre' spy={true} offset={280} duration={500}>Sobre</Link></li>
                            <li><Link to='servicos' spy={true} offset={-200} duration={500}>Serviços</Link></li>
                            <li><Link to='contato' spy={true} offset={280} duration={500}>Contato</Link></li>
                        </ul>
                    </div>
                </HamburgerMenu>
                <div className='itens'>
                    <Link to='sobre' spy={true} offset={280} duration={500}>Sobre</Link>
                    <Link to='servicos' spy={true} offset={-180} duration={500}>Serviços</Link>
                    <Link to='contato' spy={true} offset={280} duration={500}>Contato</Link>
                </div>
            </Navbar>
            <Content id='sobre'>
                <div className='apresenta-box'>
                    <div className="image-container">
                        {larguraDaTela <= 900 ? (<img src={img1} alt="Imagem de uma mercedes" />) : (<img src={mercedesgrande} alt="Imagem de uma mercedes" />)}
                        <p>Oficina Especializada Em Mercedes-Benz.</p>
                    </div>
                    <h4>Comprometimento e confiança</h4>
                    <div className="sobre">
                        <div className="texto-sobre">
                            <h5>Na Autoluxo Mercedes, temos um profundo apreço pela sofisticação da engenharia alemã da Mercedes-Benz. Com uma longa trajetória de compromisso com a marca, oferecemos serviços automotivos de primeira linha para garantir que sua Mercedes-Benz esteja sempre em condições ótimas.</h5><br />
                            <h5>Especialistas em Mercedes-Benz: Nossa equipe é formada por profissionais que se dedicam exclusivamente à marca. Estamos familiarizados com cada inovação e especificidade técnica que fazem da sua Mercedes-Benz um veículo único, garantindo um atendimento altamente especializado.</h5><br />
                            <h5>Localização Privilegiada: Nossa localização é de fácil acesso. Estamos sempre prontos para recebê-lo e cuidar da sua Mercedes-Benz com todo o conforto que você merece.</h5>
                        </div>
                        <img src={sobre} alt="Imagem de um mercedes" />
                    </div> 
                    <h4>O serviço certo para seu veículo</h4>   
                    <div className="servicos" id='servicos'>
                        <div>
                            <img src={revisao} alt="Imagem representando revisão da mercedes" />
                            <FaFan fontSize={larguraDaTela<=900?50:80}/>
                            <h1>Sistema de Arrefecimento</h1>
                        </div>
                        <div>
                            <img src={trocaoleo} alt="Imagem de mecânico arrumando carro" />
                            <TbEngine fontSize={larguraDaTela<=900?50:80}/>
                            <h1>Manutenção de Injeção Eletrônica</h1>
                        </div>
                        <div>
                            <img src={motor} alt="Homem e mulher arrumando motor" />
                            <BiSolidCarMechanic fontSize={larguraDaTela<=900?50:80}/>
                            <h1>Motor</h1>
                        </div>
                    </div>
                </div>  
            {formulario}
            </Content>
            <Footer>
                <p>© 2024. AUTOLUXO MERCEDES. Todos os direitos reservados</p>
            </Footer>
        </>
    )
}

export default Home
