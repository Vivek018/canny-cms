import { Header } from "../header"

type Props = {}

export async function AboutSection({}: Props) {
  return (
    <main>
      <Header text='Us' title='About' reverse description="" />
    </main>
  );
}