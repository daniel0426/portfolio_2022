import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './Loader';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const toastSuccessStyle = {
    background: 'white',
    color: '#4bb543',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
  };

  const toastErrorStyle = {
    background: 'white',
    color: '#f56565',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
  };
  const onSubmit = async (data, e) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          reset();
          toast('Thank you, your message has been sent', {
            duration: 3000,
            style: toastSuccessStyle,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast('Please try it again leter.', {
          duration: 3000,
          style: toastErrorStyle,
        });
      });
  };

  return (
    <section className="relative" id="contact">
      <div className="container md:px-5 py-24 mx-auto mb-24">
        <div className="flex flex-col text-left sm:text-center mx-auto w-4/5 md:w-full mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-medium title-font mb-4 text-brightpurple">
            Send me a message !
          </h1>
          <p className="leading-relaxed text-[16px] md:text-xl font-light r">
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
                    pattern: /^[a-zA-Z0-9_ ]*$/,
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
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                disabled={isSubmitting}
                className="inline mx-auto uppercase tracking-wider bg-brightpurple  text-white  border-[1px] border-brightpurple py-2 px-4 text-sm sm:py-2 sm:px-8 focus:outline-none transition-all sm:text-lg font-light mt-4"
              >
                {isSubmitting ? <Loader color="fill-white" /> : 'Shoot'}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster className="absolute bottom-0" position="bottom-center" />
    </section>
  );
}

export default Contact;
