import React from "react";
import { useForm, Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset({ name: "", email: "", number: "", message: "", check: false });
  };
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex items-center justify-center my-8">
          <div className="py-7 px-5 w-full sm:w-fit sm:p-[40px] lg:p-[60px] bg-[#DB7093] rounded-xl ">
            <h2 className="text-white font-black text-[30px] text-center">Заявка</h2>
            {/* {text && (
              <p className="text-white font-regular text-[20px] mt-6">{text}</p>
            )} */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              method="post"
              className="flex flex-col space-y-5 mt-[40px]"
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  className={`py-3 sm:py-[18px] px-5 sm:pl-8 bg-transparent hover:bg-white focus:bg-white font-regular text-[16px] text-brown focus:text-blue hover:text-blue ${
                    errors.name
                      ? "placeholder:text-red"
                      : "placeholder:text-seadrive"
                  } ${
                    errors.name ? "focus:border-red" : ""
                  } rounded-xl border-2 ${
                    errors.name ? "border-red" : "border-seadrive"
                  } focus:border-white  duration-200 outline-none`}
                  placeholder="Имя"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red font-regular mt-2">
                    Check your name, please fill this field
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className={`py-3 sm:py-[18px] px-5 sm:pl-8 bg-transparent hover:bg-white focus:bg-white font-regular text-[16px] text-white focus:text-blue hover:text-blue ${
                    errors.email
                      ? "placeholder:text-red"
                      : "placeholder:text-seadrive"
                  } ${
                    errors.email ? "focus:border-red" : ""
                  } rounded-xl border-2 ${
                    errors.email ? "border-red" : "border-seadrive"
                  } focus:border-white  duration-200 outline-none`}
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red font-regular mt-2">
                    Check your email, please fill this field
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <div
                  className={`py-3 sm:py-[18px] px-5 sm:pl-8 bg-transparent hover:bg-white focus:bg-white font-regular text-[16px] text-white focus:text-blue hover:text-blue ${
                    errors.number
                      ? "placeholder:text-red"
                      : "placeholder:text-seadrive"
                  } ${
                    errors.number ? "focus:border-red" : ""
                  } rounded-xl border-2 ${
                    errors.number ? "border-red" : "border-seadrive"
                  } focus:border-white  duration-200 outline-none`}
                >
                  <Controller
                    name="number"
                    control={control}
                    render={({ field }) => <PhoneInput {...field} />}
                  />
                  {errors.number && (
                    <span className="text-red font-regular mt-2">
                      Check your number, please fill this field
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <textarea
                  className="py-3 sm:py-[18px] px-5 sm:pl-8 bg-transparent hover:bg-white focus:bg-white font-regular text-[16px] text-white focus:text-blue hover:text-blue placeholder:text-seadrive rounded-xl border-2 border-seadrive focus:border-white  duration-200 outline-none"
                  placeholder="Ваше сообщение"
                  {...register("message", { required: false })}
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-white focus:bg-insigniawhite hover:bg-bluedepths py-3 sm:py-[18px] sm:md:px-[42px] rounded-xl font-bold text-[16px] text-blue flex items-center justify-center space-x-6 outline-none w-full"
                >
                  <span>Отправить</span>
                  <span>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 14 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4.5H12M12 4.5L8.72727 1M12 4.5L8.72727 8"
                        stroke="#376FFF"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
