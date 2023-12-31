import Link from 'next/link'
import type { MenuProps } from 'antd'
import { GalleryVerticalEnd, Heart, LogOut, Settings, User, } from 'lucide-react';


export const navbarItems: MenuProps['items'] = [
    {
        label: (
            <Link href="/">Home</Link>
        ),
        key: 'home',
        icon: '',
    },
    {
        label: 'Popular',
        key: 'popular',
        icon: '',
    },
    {
        label: 'Products',
        key: 'product',
        icon: '',
    },
    {
        label: 'About',
        key: 'SubMenu',
        icon: '',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                        children: [
                            {
                                label: 'Option 1',
                                key: 'subsetting:1',
                            },
                            {
                                label: 'Option 2',
                                key: 'subsetting:2',
                            },
                        ],
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Contact</a>
        ),
        key: 'alipay',
    },
]

export const avatarDropdownItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <div className='flex justify-center items-center text-sm'>
                <h6>Hi! <span className='font-semibold text-gray-900'>XiaoJiu</span></h6>
            </div>
        ),
    },
    {
        type: 'divider'
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="" className=' text-sm text-primary-500 font-normal'>
                <span>My likes</span>
            </a>
        ),
        icon: <span className='text-primary-500'><Heart size={16} color='currentColor' fill='currentColor' /></span>,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="" className='text-sm text-primary-500 font-normal'>
                <span>My purchase</span>
            </a>
        ),
        icon: <span className='text-primary-500'><GalleryVerticalEnd size={16} color='currentColor' fill='currentColor' /></span>,
    },
    {
        type: 'divider',
    },
    {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" className='text-sm text-gray-500 font-normal' href="">
                My profile
            </a>
        ),
        icon: <span className='text-gray-500'><User size={16} color='currentColor' fill='currentColor' /></span>
    },
    {
        key: '5',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="" className='text-sm text-gray-500 font-normal'>
                Account settings
            </a>
        ),
        icon: <span className='text-gray-500'><Settings size={16} color='currentColor' fill='currentColor' /></span>
    },
    {
        type: 'divider'
    },
    {
        key: '6',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="" className='text-center text-gray-700 font-medium'>
                <span className=''>Sign out</span>
            </a>
        ),
        icon: <span className='text-gray-700'><LogOut size={16} color='currentColor' /></span>
    },
];