import Link from 'next/link';
import { MainLayout } from "../../components/layouts/MainLayout";


export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Ir a <Link href={{
          pathname: '/',
          query: { id: '5' }
        }}>Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
