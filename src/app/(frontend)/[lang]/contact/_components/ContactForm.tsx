"use client";

import { Button } from "@/common/ui/Button";
import { Input } from "@/common/ui/Input";
import { Textarea } from "@/common/ui/Textarea";
import { ContactInfo, EmailForm } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  body: ContactInfo["body"];
};

export function ContactForm({ body }: Props) {
  console.log(body[0]);

  const [formState, setFormState] = useState<EmailForm>({
    name: "",
    subject: "",
    message: "",
  });

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
  };

  const onFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    setFormState((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  return (
    <section className='my-20'>
      <h2 className='font-extrabold text-lg mb-4 md:text-2xl'>
        {body[0].text}
      </h2>
      <form
        onSubmit={onFormSubmit}
        className='w-full flex flex-col justify-center'
      >
        <Input
          placeholder={body[1].text}
          name='name'
          value={formState.name}
          onChange={onFormChange}
        />
        <Input
          placeholder={body[2].text}
          name='subject'
          required
          value={formState.subject}
          onChange={onFormChange}
        />
        <Textarea
          placeholder={body[3].text}
          name='message'
          required
          value={formState.message}
          onChange={onFormChange}
        />
        <Button
          type='submit'
          className='mt-6 w-full sm:w-40 ml-auto'
          disabled={!formState.message || !formState.subject}
        >
          Send
        </Button>
      </form>
    </section>
  );
}
