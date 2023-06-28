import { 
  ImgContainer,
  Thumbnail,
  Title,
  Description
} from "./style"

interface PropsCard {
  name: string,
  description: string,
  thumbnailUrl: string,
  thumbnailExtension: string
}

const Card: React.FC<PropsCard> = ({
  name,
  description,
  thumbnailUrl,
  thumbnailExtension

}) => {
    
  return(
    <ImgContainer>
      <Thumbnail 
        src={`${thumbnailUrl}.${thumbnailExtension}`} 
        alt={name} />
      <Title children={name} />
      <Description children={description} />
    </ImgContainer>
  )
}

export default Card;