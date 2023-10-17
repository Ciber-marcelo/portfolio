import pokedex from '../projects-images/ProjectPokedex.svg'
import portfolio from '../projects-images/ProjectPortfolio.svg'

export const projects = [
   {
      id: 1,
      image: pokedex,
      title: 'Pokédex',
      text: 'Pokédex é uma aplicação web feita para simular uma pokédex dos jogos da franquia Pokémon, utilizando a PokéAPI para listar cada pokémon e suas principais informações dos jogos.',
      repo: 'https://github.com/Ciber-marcelo/Pokedex',
      link: 'https://pokedex-marcelones.vercel.app/',
      technologies: [
         'React.js', 
         'TypeScript', 
         'Styled-Components', 
         'Axios'
      ]
   },
   {
      id: 2,
      image: portfolio,
      title: 'Portfólio',
      text: 'Meu Portfólio é uma aplicação web utilizando Next e Tailwind.',
      repo: 'https://github.com/Ciber-marcelo/portfolio',
      link: 'https://portfolio-marcelones.vercel.app/',
      technologies: [
         'Next.js', 
         'TypeScript', 
         'Tailwind.css'
      ]
   },
];