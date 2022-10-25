import '@styles/global.css'
import Header from '@containers/Header'
import AddToTheList from '@containers/AddToTheList'
import List from '@containers/List'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <AddToTheList />
                <List />
            </main>
        </>
    )
}

export default Home
