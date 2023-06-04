import { Header, Description, AuthNav } from 'components/Main';
import {TaskColumnCard} from '../components/User/MainLayout/TaskColumnCard/TaskColumnCard'



const MainPage = () => {
  return (
    <div>
      {/* <h3>MainPage</h3> */}
      <Header />
      <Description />
      <AuthNav />
      <TaskColumnCard />
      <></>
    </div>
  );
};

export default MainPage;
