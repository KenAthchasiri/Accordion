import { createContext, useState} from 'react'
import './App.css'
import SingleContent from './components/SingleContent'
import data from './data'
import Switch from "react-switch";

export const themeContext = createContext()

function App() {
  const [theme,setTheme] = useState('light')
  const toggleSwitch = () =>{
    setTheme(
      theme === 'dark' ? 'light' : 'dark'
    )
  }
  return (
    <themeContext.Provider value={{theme,setTheme}}>
      <main className={theme}>
        <div className={theme === 'dark' ? 'container dark' : 'container'}>
          <div className='Head'>
            <h2 className={theme === 'dark' ? 'h2 dark' : 'h2'}>เครื่องมือพัฒนาเว็บปี 2022</h2>
            <Switch
              onChange={toggleSwitch} 
              checked={theme==='dark'}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor={'#ffa500'}
            />
          </div>
          <section>
            {data.map((res)=>{
              return <SingleContent key={res.id} title={res.title} description={res.description}/>

            })}
          </section>
        </div>
      </main>
    </themeContext.Provider>
    
  )
}

export default App
