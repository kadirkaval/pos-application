import React from 'react'
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';
import { Input } from 'antd';

function Header() {
  return (
    <div className='border-b m-6'>
        <header className='header py-4 px-6 flex justify-between items-center gap-10'>
            <div className="logo">
                <a href="/">
                    <h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2>
                </a>
            </div>
            <div className="header-search flex-1">
            <Input className='rounded-full max-w-[800px]' size="large" placeholder="Ürün ara.." prefix={<SearchOutlined/>} />
            </div>
            <div className="menu-links">
                <a href='/' className='menu-link flex flex-col'>
                    <HomeOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs text-[10px]'>Home</span>
                </a>
            </div>
        </header>
    </div>
  )
}

export default Header