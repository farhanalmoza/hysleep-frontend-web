import Breadcrumb from '../components/Breadcrumb';
import CategoryTable from '../components/CategoryTable';
import CategoryForm from '../components/CategoryForm';
import { getCategories } from "../services/categoryServices";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    fetchCategories();    
  }, []);

  const fetchCategories = async() => {
    try {
      const data = await getCategories();
      setCategories(data.data);
    } catch (error) {
      toast.error('Failed to fetch categories');
    }
  }

  const fetchCategory = async(id: any, categoryName: any) => {
    setIsEdit(true);
    setCategory([id, categoryName]);
  }

  const cancelEdit = () => {
    setIsEdit(false);
  }

  return (
    <>
     <Breadcrumb pageName="Category" />
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <CategoryForm onCategoryAdded={fetchCategories} isEdit={isEdit} category={category} cancelEdit={cancelEdit} />
      <CategoryTable categories={categories} fetchCategories={fetchCategories} fetchCategory={fetchCategory} />
     </div>
    </>
  )
}

export default Category;