import './footer.css'

import LogoDev from '../../images/logoVWA.png'


const Footer = () =>{

    const date = new Date();
    const ano = date.getFullYear();

    return(
        <footer id='Desenvolvedor' class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#Home" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#Sobre" class="nav-link px-2 text-body-secondary">Sobre</a></li>
      <li class="nav-item"><a href="#Comparando" class="nav-link px-2 text-body-secondary">Comparando</a></li>
      <li class="nav-item"><a href="#Contrate" class="nav-link px-2 text-body-secondary">Contrate</a></li>
    </ul>
    <p class="text-center text-body-secondary">© {ano} Company, Inc</p>
    <div className='footer-developed'>
                    <span>Desenvolvido por</span>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/victor-wallace-dev-br/'>
                    <img src={LogoDev} alt='Desenvolvedor' />
                    </a>
                </div>
  </footer>
    )
}

export default Footer