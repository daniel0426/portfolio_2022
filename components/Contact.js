import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          //hot toast success
        }
      })
      .catch((err) => {
        console.log(err);
        //hot toast failed
      });
  };

  return (
    <section className="relative" id="contact">
      <div className="container md:px-5 py-24 mx-auto mb-24">
        <div className="flex flex-col text-center mx-auto w-4/5 md:w-full mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-medium title-font mb-4 text-brightpurple">
            Send me a message !
          </h1>
          <p className="leading-relaxed text-lg md:text-xl font-light text-center">
            Got a question or proposal, or just want {''}
            <br className="hidden sm:flex" />
            to say hello ? Go ahead.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-4/5 sm:w-2/3 lg:w-1/2 mx-auto "
        >
          <div className="flex flex-wrap -m-2">
            <div className="md:pr-6 w-full md:w-[50%] mb-4 md:mb-0">
              <div className="group  space-y-3">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  {...register('name', {
                    required: true,
                    pattern: /^[a-zA-Z]+$/,
                    maxLength: 50,
                  })}
                  type="text"
                  placeholder="Enter your name"
                  className="input"
                />
                {errors.name && (
                  <p className="warningMessage">Your name is required</p>
                )}
              </div>
            </div>
            <div className=" md:pl-6 w-full md:w-[50%] mb-4 md:mb-0">
              <div className="group space-y-3">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^\S+@\S+$/i,
                    },
                  })}
                  className="input"
                />
                {errors.email && (
                  <p className="warningMessage">Your valid email is required</p>
                )}
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="group space-y-3">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Enter your message"
                  {...register('message', {
                    required: true,
                  })}
                  className="input"
                ></textarea>
                {errors.message && (
                  <p className="warningMessage">Your message is required</p>
                )}
              </div>
            </div>
            <div className="w-full mt-6 text-right">
              <button
                type="submit"
                className="inline mx-auto uppercase tracking-wider bg-brightpurple  text-white  border-[1px] border-brightpurple py-2 px-4 text-sm sm:py-2 sm:px-8 focus:outline-none transition-all sm:text-lg font-light mt-4"
              >
                Shoot
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
