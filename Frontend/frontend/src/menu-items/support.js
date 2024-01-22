// assets
import { ChromeOutlined, QuestionOutlined, CameraOutlined, FormOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  CameraOutlined,
  FormOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Priprava Naročil',
  type: 'group',
  children: [
   {
      id: 'scanner',
      title: 'Scanner',
      type: 'item',
      url: '/artikli/scanner',
      icon: icons.CameraOutlined,
      target: false
    },
    {
      id: 'priprava',
      title: 'Priprava',
      type: 'item',
      url: '/priprava',
      icon: icons.FormOutlined,
      target: false
    }
   ]
    /*
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true
    }
  ]*/
};

export default support;
