import React from 'react'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, UserOutlined, BarChartOutlined, LogoutOutlined} from '@ant-design/icons';
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
            <div className="menu-links flex justify-between items-center gap-8">
                <a href='/' className='menu-link flex flex-col'>
                    <HomeOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs text-[10px]'>Anasayfa</span>
                </a>
                <a href='/' className='menu-link flex flex-col'>
                    <ShoppingCartOutlined className='md:text-3xl text-2xl'/>
                    <span className='md:text-xs text-[10px]'>Sepet</span>
                </a>
                <a href='/' className='menu-link flex flex-col'>
                    <CopyOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs text-[10px]'>Faturalar</span>
                </a>
                <a href='/' className='menu-link flex flex-col'>
                    <UserOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs text-[10px]'>Müşteriler</span>
                </a>
                <a href='/' className='menu-link flex flex-col'>
                    <BarChartOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs text-[10px]'>İstatislikler</span>
                </a>
                <a href='/' className='menu-link flex flex-col'>
                    <LogoutOutlined className='md:text-2xl text-xl'/>
                    <span className='md:text-xs text-[10px]'>Anasayfa</span>
                </a>
            </div>
        </header>
    </div>
  )
}

export default Header