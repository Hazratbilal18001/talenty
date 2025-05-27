import React from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='flex justify-center gap-6 bg-[#fcfcfc]  pt-9'>
            {/* Login section */}
            <div className=' bg-[#ffffff] rounded-lg px-16 py-7'>
                {/* logo */}
                <div className="flex justify-center gap-2 p-6 font-museo pt-16 text-[#B61A1F] font-extrabold ">
                    <img className="w-12 h-12" src="./images/logo.png" alt="" />
                    <h1 className='text-3xl'>Talenty</h1>
                </div>

                {/* login */}
                <div className='pt-12 pb-10'>
                    <h1 className='text-3xl '>
                        Iniciar Sesión
                    </h1>
                </div>

                {/* 2 inputs */}
                <div className='text-[#4E4E4E] text-sm'>
                    <div className='space-y-4'>
                        {/* Email */}
                        <div>
                            <h1>Correo electrónico</h1>
                            <div className='relative'>
                                <input
                                    type="text"
                                    placeholder='Ingresa el correo electrónico'
                                    className='border border-[#00000033] rounded-xl py-3 px-24 w-full text-start placeholder:text-sm'
                                />
                                <Mail className='absolute left-3 top-3 w-4 h-4 text-[#911A23]' />
                            </div>

                        </div>

                        {/* Password */}
                        <div>
                            <h1>Contraseña</h1>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Ingresa la contraseña'
                                    className='border border-[#00000033] rounded-xl py-3 px-24 pr-10 w-full placeholder:text-sm'
                                />
                                <Lock className='absolute left-3 top-2.5 w-4 h-4 text-[#911A23]' />
                                {showPassword ? (
                                    <EyeOff
                                        className='absolute right-3 top-2.5 w-5 h-5 cursor-pointer'
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <Eye
                                        className='absolute right-3 top-2.5 w-5 h-5  cursor-pointer'
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Forgot password */}
                    <div className='flex justify-end text-[#911A23] mt-2'>
                        ¿Olvidaste tu contraseña?
                    </div>

                    {/* Remember me */}
                    <div className='flex space-x-3 pt-8'>
                        <input type="checkbox" />
                        <h1>Recordar mi sesión</h1>
                    </div>
                </div>

                {/* button */}
                <div className='pt-12'>
                    <div className='bg-[#D71E30] text-center text-sm rounded-xl hover:bg-[#B01927]'>
                        <button className='mx-0 px-0 py-3 text-white'>
                            Iniciar sesión
                        </button>
                    </div>
                </div>

            </div>

            {/* Image section */}
            <div className="hidden md:block md:w-1/2">
                <img src="./images/Login.png" alt="" className="w-full h-auto" />
            </div>

        </div>
    )
}

export default LogIn
