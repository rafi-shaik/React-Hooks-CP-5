// Write your code here
import {ListItem, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, notesText} = details

  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Para>{notesText}</Para>
    </ListItem>
  )
}

export default NoteItem
