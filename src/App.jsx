import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSingupSubmit = data => {
    console.log('singup data:', data);
  }

  const handleProfileUpdate = data => {
    console.log('profile data:', data);
  }

  return (
    <>
      <h1>Form Master</h1>
      <SimpleForm></SimpleForm>
      <StatefulForm></StatefulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReusableForm formTitle={'Sing Up'} handleSubmit={handleSingupSubmit}>
        <div>
          <h2>Form:5 -Reusable Form</h2>
          <p>This is sign up</p>
          <p>using special prop children.</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleProfileUpdate} submitBtnText={'update'}>
        <p>This is profile update</p>
      </ReusableForm>

      <Grandpa></Grandpa>
    </>
  )
}

export default App;
