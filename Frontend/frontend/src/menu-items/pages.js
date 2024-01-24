// assets
import { LoginOutlined, ProfileOutlined, UserOutlined, UnorderedListOutlined, TeamOutlined, FieldTimeOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  UserOutlined,
  UnorderedListOutlined,
  TeamOutlined,
  FieldTimeOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Pregled',
  type: 'group',
  children: [
    /*{
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: false
    },*/
    {
      id: 'register1',
      title: 'Zaposleni',
      type: 'item',
      url: '/zaposleni',
      icon: icons.UserOutlined,
      target: false
    },
    {
      id: 'pregledArtiklov',
      title: 'Artikli',
      type: 'item',
      url: '/artikli',
      icon: icons.UnorderedListOutlined,
      target: false
    }
    ,
    {
      id: 'pregledNarocil',
      title: 'Naročila',
      type: 'item',
      url: '/narocila',
      icon: icons.ProfileOutlined,
      target: false
    },
    {
      id: 'pregledStrank',
      title: 'Stranke',
      type: 'item',
      url: '/stranka',
      icon: icons.TeamOutlined,
      target: false
    },
    {
      id: 'delovniCas',
      title: 'Delovni Čas',
      type: 'item',
      url: '/delovniCas',
      icon: icons.FieldTimeOutlined,
      target: false
    },
  ]
};

export default pages;
