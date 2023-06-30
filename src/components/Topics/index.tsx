import { 
  Blocks,
  Badges
} from "./style"

interface PropsTopics {
  items?:Object[]
  title: string
}

const Topics: React.FC<PropsTopics> = ({
  items,
  title
}) => {
    
  return(
    <>
      {items && (
        <Blocks>
          <h3>{title}</h3>
          {items?.map((item: any) =>
            <Badges key={item.name}>
              {item.name}
            </Badges>
          )}
        </Blocks>
      )}
    </>
  )
}

export default Topics;