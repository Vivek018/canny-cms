"use client";

import { Button } from "@/common/ui/Button";
import { Input } from "@/common/ui/Input";
import { Textarea } from "@/common/ui/Textarea";
import { EmailForm } from "@/types";
import React, { ChangeEvent, FormEvent, useState } from "react";

type Props = {};

export function ContactForm({}: Props) {
  const [formState, setFormState] = useState<EmailForm>({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        Let&apos;s discuss your needs!
      </h2>
      <form
        onSubmit={onFormSubmit}
        className='w-full flex flex-col justify-center'
      >
        <div className='flex flex-col md:flex-row md:gap-6'>
          <Input
            placeholder='Email *'
            type='email'
            name='email'
            required
            value={formState.email}
            onChange={onFormChange}
          />
          <Input
            placeholder='Name'
            name='name'
            value={formState.name}
            onChange={onFormChange}
          />
        </div>
        <Input
          placeholder='Subject *'
          name='subject'
          required
          value={formState.subject}
          onChange={onFormChange}
        />
        <Textarea
          placeholder='Message *'
          name='message'
          required
          value={formState.message}
          onChange={onFormChange}
        />
        <Button
          type='submit'
          className='mt-6 w-full sm:w-40 ml-auto'
          disabled={
            !(formState.email && formState.message && formState.subject)
          }
        >
          Send
        </Button>
      </form>
    </section>
  );
}
