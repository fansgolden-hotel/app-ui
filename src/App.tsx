import './App.scss';
import Layout from './component/Layout/Layout'
import NavBar from './component/navbar/NavBar'
import MainContent from './component/main/MainContent'
import Footer from './component/footer/Footer';

function App() {
  return (
    <>
      <Layout
        navbar={<NavBar />}
        mainContent={<MainContent />}
        footer={<Footer />}
      >
      </Layout>
    </>
  )
}

export default App
