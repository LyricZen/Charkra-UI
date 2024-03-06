import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>제목:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>제목을 입력해주세요.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>내용:</FormLabel>
          <Textarea 
            placeholder="내용을 입력해주세요..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox 
            name="isPrioity"
            size="lg"
            colorScheme="purple"
          />
          <FormLabel mb="0" ml="10px">선택 박스</FormLabel>
        </FormControl>
        
        <Button type="submit">저장</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPrioity: data.get('isPrioity') === ''
  }

  console.log(task)

  return redirect('/')
}