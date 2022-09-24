import { ReactNode } from 'react'
import ContentLayout from '../components/ContentLayout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Navbar from './Navbar'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ContentLayout>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {children}
      </Main>
      <Footer />
    </ContentLayout>
  )
}

export default Layout