import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <h1>Привет, я Backend Developer</h1>
        <p>Специализируюсь на кибербезопасности и backend-разработке</p>
      </Hero>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: var(--text);
    opacity: 0.8;
  }
`

export default Home
