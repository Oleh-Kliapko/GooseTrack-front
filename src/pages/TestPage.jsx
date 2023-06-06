import { PeriodPaginator } from 'components/User';
import { getChangedDate } from 'helpers';

const TestPage = () => {
  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h2>СЮДИ ТЕСТУЄМО СВОЇ КОМПОНЕНТИ</h2>
      <PeriodPaginator
        date={'2023-06-06'}
        type={'month'}
        changeDate={getChangedDate}
      />
    </div>
  );
};

export default TestPage;
