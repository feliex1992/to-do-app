import Enzime from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzime.configure({
  adapter: new Adapter()
});