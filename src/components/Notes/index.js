// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  NotesContainer,
  Heading,
  FormContainer,
  Input,
  TextArea,
  Button,
  NoNotesContainer,
  NoNotesHeading,
  NoNotesPara,
  Image,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notesText, setNotesText] = useState('')
  const [notesList, setNotes] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotesText = event => {
    setNotesText(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {id: uuidv4(), title, notesText}
    setNotes(prev => [...prev, newNote])
    setTitle('')
    setNotesText('')
  }

  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <FormContainer onSubmit={onSubmitForm}>
          <Input
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <TextArea
            rows="3"
            placeholder="Take a Note..."
            onChange={onChangeNotesText}
            value={notesText}
          />
          <Button type="submit">Add</Button>
        </FormContainer>
        {notesList.length === 0 ? (
          <NoNotesContainer>
            <Image
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoNotesHeading>No Notes Yet</NoNotesHeading>
            <NoNotesPara>Notes you add will appear here</NoNotesPara>
          </NoNotesContainer>
        ) : (
          <NotesList>
            {notesList.map(each => (
              <NoteItem key={each.id} details={each} />
            ))}
          </NotesList>
        )}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
