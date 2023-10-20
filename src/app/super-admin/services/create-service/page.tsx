"use client";
import Loading from "@/app/loading";
import { useCreateServiceMutation } from "@/redux/features/service/serviceApi";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CreateService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const [createService, {data, isLoading}] = useCreateServiceMutation();
  console.log(data);
  if(data) {
    router.push(`/super-admin/services/all-services`);
  };
  const formSubmit = (data: any) => {
    const serviceInfo = {
      name: data.Name,
      serviceImage: data.serviceImage,
      price: parseFloat(data.price),
      description: data.description,
    };
    createService(serviceInfo);
    console.log(serviceInfo);
  };
  if(isLoading){
    return <Loading></Loading>
  }


  return (
    <div className="w-auto md:w-auto mx-4 md:mx-24 mt-20 px-4 md:px-10 py-14 shadow-xl bg-[#ffffffb5] rounded-lg">
      <p className="text-3xl text-center font-bold">Create New Service</p>

      <form onSubmit={handleSubmit(formSubmit)} className="w-auto  md:px-0">

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="Name">Name:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                id=""
                required
                placeholder="Name"
                {...register("Name", { required: true })}
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="serviceImage">Image Url:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                {...register("serviceImage", { required: true })}
                id=""
                placeholder="Image Url"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="price">Price:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="number"
                {...register("price", { required: true })}
                id=""
                required
                placeholder="Price"
              />
            </div>

            <div className="flex flex-col mt-2 md:mt-7 w-[49%]">
              <label htmlFor="description">Description:</label>
              <input
                className="border p-3 rounded-lg mt-2"
                type="text"
                {...register("description")}
                id=""
                placeholder="Optional"
              />
            </div>
          </div>

        <input
            className="bg-primary py-3 px-6 text-lg font-semibold bg-secondaryColor text-white rounded-lg mt-3 md:mt-10 cursor-pointer"
            type="submit"
            value="Create"
          />
      </form>
    </div>
  );
};

export default CreateService;
