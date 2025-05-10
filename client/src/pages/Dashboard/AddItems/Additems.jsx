import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/shared/SectionTitle";
import AllButtons from "../../../components/shared/AllButtons";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Additems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.title} added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100 transition-colors">
      <SectionTitle subHeading={"What's New"} heading={"Add an item"} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 border border-gray-200 dark:border-gray-700"
      >
        {/* Recipe Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Recipe name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            placeholder="Enter recipe name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        {/* Price and Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option disabled value="default">
                Select Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
        </div>

        {/* Recipe Details */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Recipe Details <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="5"
            {...register("description", { required: true })}
            placeholder="Describe the recipe"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full dark:text-gray-100 dark:bg-gray-900 dark:border-gray-600"
          />
        </div>

        {/* Submit Button */}
        <AllButtons
          text="Add Item 🍜"
          type="submit"
          className="uppercase bg-emerald-600 hover:bg-emerald-700 text-white"
        />
      </form>
    </div>
  );
};

export default Additems;
