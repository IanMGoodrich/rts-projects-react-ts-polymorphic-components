import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";
import Form, { type FormHandle } from "./components/Form";

import { useRef } from "react";

function App() {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const formRef = useRef<FormHandle>(null);

  const handleSubmit = (data: unknown) => {
    const extractedData = data as {
      name: string,
      age: string,
    };
    formRef.current?.clear();
    console.log("Form submitted with data:", extractedData);
  }
  return (
    <main>
      <Input label="Your name" id="name" type="text"></Input>
      <Input label="Your age" id="age" type="number"></Input>
      <Button el="button" onClick={() => console.log('click')}>Click</Button>
      <Button el="link" href="https://www.npr.org" target="_blank">Link</Button>
      <Card title="Test card" cta={<Button el="button" onClick={() => console.log('click')}>Click</Button>} content="Sed at risus vel nulla consequat fermentum. Donec et orci mauris. Nullam tempor velit id mi luctus, a scelerisque libero accumsan. In hac habitasse platea dictumst. Cras ac nunc nec massa tristique fringilla."></Card>
      <List items={[{children: <Button el="link" href="https://www.npr.org" target="_blank">Link</Button>},{children: <Button el="link" href="https://www.npr.org" target="_blank">Link</Button>}, {children: <Button el="link" href="https://www.npr.org" target="_blank">Link</Button>}]} />
      <Form onSave={handleSubmit} ref={formRef}>
        <Input label="Name" id="name-input" placeholder="Enter your full name" type="text" ref={nameInput} />
        <Input label="Age" id="age-input" placeholder="Enter you age" type="number" ref={ageInput} />
        <Button el='button'>Save</Button>
      </Form>
    </main>
  );
}

export default App;
