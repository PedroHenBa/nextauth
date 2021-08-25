import * as Styled from './styles';
import { TextInput } from '../TextInput';
import { useState, FormEvent } from 'react';
import { Button } from '../Button';

export const FormPost = ({ onCreate, post }: FormPost) => {
  const { title = '', content = '', id = '' } = post || {};
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    setSaving(true);
    event.preventDefault();
    if (onCreate) {
      const newPost = { id, title: newTitle, content: newContent };
      await onCreate(newPost);
    }
    setSaving(false);
  };

  return (
    <Styled.Container onSubmit={handleSubmit}>
      <TextInput
        label="Title"
        name="post-title"
        type="text"
        onInputChange={(v) => setNewTitle(v)}
        value={newTitle}
      />

      <TextInput
        label="Content"
        name="post-content"
        type="text"
        as="textarea"
        onInputChange={(v) => setNewContent(v)}
        value={newContent}
      />
      <Button disabled={saving}>{saving ? 'Aguarde' : 'Salvar'}</Button>
    </Styled.Container>
  );
};

export type FormPost = {
  onCreate?: (post: StrapiPost) => Promise<void>;
  post?: StrapiPost;
};

export type StrapiPost = {
  id?: string;
  title: string;
  content: string;
};
