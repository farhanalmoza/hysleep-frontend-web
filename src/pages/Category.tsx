import Breadcrumb from '../components/Breadcrumb';
import TableTwo from '../components/TableTwo';
import CategoryTable from '../components/CategoryTable';
import CategoryForm from '../components/CategoryForm';

const Category = () => {
  return (
    <>
     <Breadcrumb pageName="Category" />
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <CategoryForm />
      <CategoryTable />
     </div>
    </>
  )
}

export default Category;