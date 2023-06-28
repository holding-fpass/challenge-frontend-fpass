import { 
  Blocks,
  Badges
} from "./style"

interface PropsSingleTopics {
  items?: any,
  title: string
}

const SingleTopics: React.FC<PropsSingleTopics> = ({
  items,
  title
}) => {
    
  return(
    <>
      {items?.length > 0 && (
        <Blocks>
        <h3>{title}</h3>
        {items?.map((item: any) =>
          <Badges>
            {item.name}
          </Badges>
        )}
      </Blocks>
      )}
    </>
  )
}

export default SingleTopics;