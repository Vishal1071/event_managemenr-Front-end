// App.jsx
import { Routes, Route } from "react-router-dom";
import './App.css'
import Error from "./Error-page/Error";

//User pages
import Account from './User-pages/Account/Account'
import Home from './User-pages/Home/Home'
import Wedding from './User-pages/Event/Wedding'
import Birthday from './User-pages/Event/Birthday'
import Corporate from './User-pages/Event/Corporate'
import Details from './User-pages/Event/Details'
import Cricket from './User-pages/Event/Cricket'
import About from './User-pages/About/About'
import Contact from './User-pages/Contact/Contact'
import Gallery from './User-pages/Gallery/Gallery'

//Admin pages
import UserList from "./Admin-pages/UserLIst/UserList";
import EventPost from "./Admin-pages/EventPost/EventPost";
import PostCategory from "./Admin-pages/PostCategory/PostCategory";
import AddGallary from "./Admin-pages/AddGallary/AddGallary";
import ContactList from "./Admin-pages/ContactList/ContactList";
import AdminProfile from "./Admin-pages/profile/AdminProfile";

//Common Pages
import Signin from './User-pages/Login/Signin'
import SignUp from './User-pages/Login/SignUp'

//Layout's
import UserLayout from './User-pages/UserLayout/UserLayout'
import AdminLayout from "./Admin-pages/Admin/AdminLayout";

function App() {

  return (
    <>

      {/* User Routes */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events/wedding" element={<Wedding />} />
          <Route path="events/birthday" element={<Birthday />} />
          <Route path="events/corporate" element={<Corporate />} />
          <Route path="events/cricket" element={<Cricket />} />
          <Route path="events/cricket/details/:id" element={<Details />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="profile" element={<Account />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<UserList />} />
        <Route path="eventPost" element={<EventPost />} />
        <Route path="postCategory" element={<PostCategory/>}/>
        <Route path="contactList" element={<ContactList/>}/>
        <Route path="addGallary" element={<AddGallary/>}/>
        <Route path="profile" element={<AdminProfile/>}/>
        </Route>

        {/* Auth routes (no header/footer) */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Catch-all for errors */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
