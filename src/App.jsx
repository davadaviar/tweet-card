import AccountItem from "./components/AccountItem"
import { accountItems } from "./constants";


function App() {

  return (
    <div className='tweet-container flex-col py-8 px-5 md:mx-auto md:max-w-3/4 lg:max-w-1/2'>
      {
        accountItems.map((accItem) => (
          <AccountItem
            name={accItem.name}
            username={accItem.username}
            imageProfile={accItem.imageProfile}
            createAt={accItem.createAt}
            tweet={accItem.tweet}
            engagement={accItem.engagements}
          />
        ))
      }
    </div>
  )
}

export default App
