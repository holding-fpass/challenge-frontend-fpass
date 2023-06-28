import { 
  CardContainer,
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
    <CardContainer>
      <Thumbnail 
        src={`${thumbnailUrl}.${thumbnailExtension}`} 
        alt={name} />
      <Title children={name} />
      <Description children={description} />
    </CardContainer>
  )
}

export default Card;