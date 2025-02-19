import Breadcrumb from '../components/Breadcrumb';
import CategoryTable from '../components/CategoryTable';
import CategoryForm from '../components/CategoryForm';
import { getCategories } from "../services/categoryServices";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Category = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <>
     <Breadcrumb pageName="Category" />
     <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <CategoryForm onCategoryAdded={fetchCategories} />
      <CategoryTable categories={categories} fetchCategories={fetchCategories} />
     </div>
    </>
  )
}

export default Category;