import { useRouter } from 'next/router'
import { useState } from 'react'
import { useGetDetailedGame } from '../../hooks/useGetDetailedGame'
import styled from "styled-components"
import Link from 'next/link'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import { StyledButton as StyledCButton } from '../../components/Pagination/Styles'
import Image from 'next/image'

const index = () => {
  const router = useRouter()
  const gameId: string = (router.query.id) as string
  const { gameInfo, loading } = useGetDetailedGame(gameId)
  const { screenshots, minimum_system_requirements } = gameInfo

  const [activeImage, setActiveImage] = useState<number>(0)

  const handleImage = (index: number) => {
    setActiveImage(() => index < 0 ? screenshots.length - 1 : index > screenshots.length - 1 ? 0 : index)//Si se retocede desde la primera posicion te lleva al ultimo indice de las screenshots y viceversa
  }

  return <div>
    {loading ? <StyledSpan>Loading...</StyledSpan> :
      <StyledMain>
        <StyledAllInfo>
          <StyledSticky>
            <div>
              <StyledImage src={gameInfo.thumbnail} />
              <div>
                <StyledLink href={gameInfo.game_url}>Claim Now</StyledLink>
                <StyledButton>Add to favorites</StyledButton>
              </div>
              <StyledAditionallInfo>
                <StyledLi><p>Developer</p><span>{gameInfo.developer}</span></StyledLi>
                <StyledLi><p>Publisher</p><span>{gameInfo.publisher}</span></StyledLi>
                <StyledLi><p>Release Date</p><span>{gameInfo.release_date}</span></StyledLi>
                <StyledLi><p>Platform</p><span>{gameInfo.platform}</span></StyledLi>
              </StyledAditionallInfo>
            </div>
          </StyledSticky>
          <StyledMainDiv>
            <h1>{gameInfo.title}</h1>
            <StyledCarousel>
              {screenshots &&
                <>
                  <div>
                    <Image src={screenshots[activeImage].image} quality={"70%"} width={2250} height={1390} layout="responsive" />
                    <StyledPButton onClick={() => handleImage(activeImage - 1)}><BsFillArrowLeftSquareFill /></StyledPButton>
                    <StyledNButton onClick={() => handleImage(activeImage + 1)}><BsFillArrowRightSquareFill /></StyledNButton>
                  </div>
                  <ul>
                    {screenshots.map((screenshot, index) => <SliderItem active={activeImage === index} key={screenshot.id}>
                      <Image src={screenshot.image} quality={"10%"} width={2250} height={1390} layout="responsive" onClick={() => handleImage(index)} />
                    </SliderItem>)}
                  </ul>
                </>}
            </StyledCarousel>
            <StyledArticle>
              <h3>{gameInfo.short_description}</h3>
              <p>Genero: <Link href={`/categories/${gameInfo.genre}`}><a>{gameInfo.genre}</a></Link></p>
              <p>{gameInfo.description}</p>
            </StyledArticle>
            <StyledSystemRequeriments>
              <h3>Minimum System Requirements</h3>
              <StyledAditionallInfo>
                {minimum_system_requirements && Object.entries(minimum_system_requirements).map(([key, value]) =>
                  <StyledLi key={key}><p>{key}</p><span>{value ?? "No data"}</span></StyledLi>)}
              </StyledAditionallInfo>
            </StyledSystemRequeriments>
          </StyledMainDiv>
        </StyledAllInfo>
      </StyledMain>}
  </div>
}
const StyledSpan = styled.span`
display: block;
color:#f4f4f4;
font-weight: 700;
font-size:5rem;
text-align:center
`

const StyledPButton = styled(StyledCButton)`
position: absolute;
opacity: 0;
top: 50%;
left: 10px;
background:transparent ;
transform: translateY(-50%);
transition: opacity .5s;
`
const StyledNButton = styled(StyledCButton)`
position: absolute;
opacity: 0;
top: 50%;
right: 10px;
background:transparent ;
transform: translateY(-50%);
transition: opacity .5s;
`
const StyledMain = styled.main`
position: relative;
margin-top: 80px;
padding: 30px;
@media (min-width: 1076px) {
padding:30px 60px 60px 60px ;}
font-size: 1.2rem;
`
const StyledAllInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
@media (min-width: 768px) {
gap: 35px;
flex-direction: row-reverse;}
gap: 25px;
`
const StyledImage = styled.img`
width: 100%;
border-radius: 5px;
`
const StyledSticky = styled.div`
min-width: 300px;
& > div {
  position: sticky;
  top: 10px;
}
`
const StyledMainDiv = styled.div`
max-width: 1024px;
& > h1{
  position: absolute;
  top:-75px;
}
& h3 {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
}
`
const StyledLink: any = styled.a`
display: block;
position: relative;
text-align: center;
text-transform: uppercase;
font-weight: 700;
letter-spacing: 1px;
padding: 10px 0;
background-color: #ea1f2e;
border-radius: 5px;
transition: .5s;
&:after{
  content: "";
  top: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  opacity: 0;
}
&:hover{
  &:after{opacity: 0.1;}
}`
const StyledButton = styled(StyledLink)`
width: 100%;
cursor: pointer;
border: 1px solid #f4f4f4;
margin-top: 8px;
background: transparent;
`
const StyledAditionallInfo = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
margin: 0;
`
const StyledLi = styled.li`
display: flex;
padding: 10px 0;
border-bottom: 1px solid gray;
flex-direction: row;
justify-content: space-between;
& p {
  margin: 0;
  text-transform: capitalize;
}
`
const StyledCarousel = styled.div`
display: flex;
flex-direction: column;
& > div{
  position: relative;
  &:hover{
    & button{
      opacity: 1;
      transition: opacity .5s;}}
    }
& ul {
  margin-top: 15px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;}
& img {border-radius: 5px;
}
`

const SliderItem = styled.li<{ active: boolean }>`
border: ${props => props.active ? "2px solid #f4f4f4" : "2px solid transparent"};
border-radius: 5px;
width: 100%;
max-width: 150px;
cursor: pointer;
&:hover{opacity: 0.4}
`
const StyledArticle = styled.article`
& * {
  line-height: 1.3rem;
}
& h3 {margin:10px 0 0 0}
& a {
  font-weight:700;
  text-decoration: underline;
  }
`
const StyledSystemRequeriments = styled.div`
background-color: #333333;
border-radius: 5px;
padding: 10px;
& h3 {
  margin-top: 0%;}
& p{
  margin-right: 50px;
  line-height: 1.1rem;
}
& span{
  line-height: 1.1rem;
  text-align: right;
}
`

export default index