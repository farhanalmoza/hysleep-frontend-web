import { useEffect, useState } from "react";
import { createCategory, updateCategory } from "../services/categoryServices";
import toast from "react-hot-toast";

const CategoryForm = ({onCategoryAdded, isEdit, category, cancelEdit}: any) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryErrorName, setCategoryErrorName] = useState("");

  useEffect(() => {    
    if (isEdit) {
      setCategoryName(category[1]);
    }
  }, [isEdit, category]);
  

  const handleAddCategory = async(e: any) => {
    if(!categoryName) {
      setCategoryErrorName("Please enter a category name");
      return;
    }

    e.preventDefault();
    try {
      const data = {
        categoryName,
      };

      if (isEdit) {
        const res = await updateCategory({categoryId: category[0], categoryName: categoryName});
        toast.success('Category updated successfully');
      } else {
        const res = await createCategory(data);
        toast.success('Category created successfully');
      }
      onCategoryAdded();
      setCategoryName('');
    } catch (error: any) {
      console.log(error);
      toast.error(error.errorMessage);
    }
  }

  const handleCancelEdit = () => {
    setCategoryName("");
    setCategoryErrorName("");
    cancelEdit();
  }

  return (
    <div className="rounded-2xl border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1 h-fit">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          Catgory Form
        </h3>
      </div>
      <div className="grid gap-4 p-6.5">
        <div className="">
          <input
            type="text"
            placeholder="Category Name"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-success active:border-success disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-success" 
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
          {categoryErrorName && (<p className="text-sm text-danger mt-2">{categoryErrorName}</p>)}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full">
          <button
            className="flex w-full justify-center rounded-lg bg-primary p-3 font-medium text-gray h-fit"
            onClick={handleAddCategory}
          >
            {isEdit ? "Update" : "Add"}
          </button>
          <button
            className="flex w-full justify-center border border-primary rounded-lg p-3 font-medium text-primary h-fit"
            onClick={handleCancelEdit}
            disabled={!isEdit}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryForm;