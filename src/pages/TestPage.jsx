import { PeriodPaginator } from 'components/User';
import { getMonthDetails } from 'helpers';


// const TestPage = () => {
//   return (
//     <div style={{ backgroundColor: 'gray' }}>
//       <h2>СЮДИ ТЕСТУЄМО СВОЇ КОМПОНЕНТИ</h2>
//       <PeriodPaginator
//         date={'2023-06-09'}
//         type={'month'}
//         changeDate={getMonthDetails}
//       />
//     </div>
//   );
// };

// export default TestPage;


import { TaskModal } from "components/User/MainLayout";

const TestPage = () => {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h2>СЮДИ ТЕСТУЄМО СВОЇ КОМПОНЕНТИ</h2>
      <PeriodPaginator
        date={'2023-06-09'}
        type={'month'}
        changeDate={getMonthDetails}
      />
    </div>
  );
};

export default TestPage;
