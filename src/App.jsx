import AccItemCard from "./components/AccItemCard";
import { accountItems } from "./constants";


function App() {

  return (
    <div className='tweet-container flex-col py-8 px-5 md:mx-auto md:max-w-3/4 lg:max-w-1/2'>
      {
        accountItems.map((accItem) => (
          <AccItemCard 
            imageProfile={accItem.imageProfile}
            name={accItem.name}
            username={accItem.username}
            createAt={accItem.createAt}
            tweet={accItem.tweet}
            engagement={accItem.engagement}
          />
        ))
      }
    </div>
  )
}

export default App
