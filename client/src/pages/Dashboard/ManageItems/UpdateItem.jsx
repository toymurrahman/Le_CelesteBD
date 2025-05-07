import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import AllButtons from "../../../components/shared/AllButtons";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const data = useLoaderData();
  const { title, category, description, price, image, _id } = data || {};
  const { register, handleSubmit, reset } = useForm();

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    let imageURL = null;

    if (data.image && data.image.length > 0) {
      const formData = new FormData();
      formData.append("image", data.image[0]);
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        imageURL = res.data.data.display_url;
      }
    }

    const menuItem = {
      title: data.title,
      category: data.category,
      price: parseFloat(data.price),
      description: data.description,
      image: imageURL || image, 
    };

    const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
    if (menuRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.title} is successfully updated`,
        showConfirmButton: false,
        timer: 1500,
      });
        reset();
    }
  };

  return (
    <div>
      <div>
        <SectionTitle subHeading={"Any thought"} heading={"Update item"} />
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
              defaultValue={title}
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
                defaultValue={price}
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
                {...register("category", { required: true })}
                defaultValue={category}
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
              defaultValue={description}
              rows="5"
              {...register("description", { required: true })}
              placeholder="Recipe Details"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          {/* File Upload */}
          <div className=" text-gray-700 px-4 py-2 rounded cursor-pointer ">
            <input type="file" {...register("image")} className="file-input " />
          </div>

          <AllButtons
            text="Update "
            type="submit"
            className="bg-emerald-200 uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
