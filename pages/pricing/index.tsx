import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"

export default function Pricing (){
    
    return (
        <div>
            <h1>Pricing Page</h1>

            <h1 className={'title'}>
                Ir a <Link href={{
                    pathname: '/',
                    query: { id: '5' }
                }}>Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{" "}
                <code className={'code'}>pages/Pricing.jsx</code>
            </p>
           
        </div>
    )
}
Pricing.getLayout = function getLayout(page:JSX.Element) {
    return (
      <MainLayout>
          {page}
      </MainLayout>
    )
  }