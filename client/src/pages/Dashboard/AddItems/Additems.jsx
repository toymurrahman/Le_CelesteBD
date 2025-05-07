import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/shared/SectionTitle";
import AllButtons from "../../../components/shared/AllButtons";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2'



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const Additems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // image upload to imgbb
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // take all menu data 
      const menuItem = {
        title: data.title,
        category: data.category,
        price: parseFloat(data.price),
        description: data.description,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log("post to db", menuRes.data);
      if(menuRes.data.insertedId){
        // aleart show here
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.title} added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      }
      reset();
    }
    console.log("post to imgbb", res.data);
  };
  return (
    <div>
      <div>
        <SectionTitle subHeading={"What's New"} heading={"Add an item"} />
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto space-y-6"
        >
          {/* Recipe name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipe name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Recipe name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price<span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category<span className="text-red-500">*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipe Details<span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              {...register("description", { required: true })}
              placeholder="Recipe Details"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* File Upload */}
          <div className=" text-gray-700 px-4 py-2 rounded cursor-pointer ">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input "
            />
          </div>

          <AllButtons
            text="Add Item 🍜 "
            type="submit"
            className="bg-emerald-200 uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default Additems;
