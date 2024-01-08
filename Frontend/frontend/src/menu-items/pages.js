// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  /*title: 'Authentication',*/
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
      icon: icons.ProfileOutlined,
      target: false
    },
    {
      id: 'pregledArtiklov',
      title: 'Artikli',
      type: 'item',
      url: '/artikli',
      icon: icons.ProfileOutlined,
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
    }
  ]
};

export default pages;
