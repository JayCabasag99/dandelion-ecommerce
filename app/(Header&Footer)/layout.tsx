import type { Metadata } from 'next'
import { Layout, Space, theme } from 'antd'

import '@/app/globals.css'
import HeaderCustom from '@/components/HeaderCustom'
import FooterCustom from '@/components/FooterCustom'
import StyledComponentsRegistry from '@/lib/AntdRegistry'


export const metadata: Metadata = {
    title: 'Dandelion',
    description: 'Generated by XiaoJiuDev',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <html lang="en">
            <body className="">
                <StyledComponentsRegistry>
                    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                        <Layout className='!bg-slate-100'>
                            <HeaderCustom />
                            {children}
                            <FooterCustom />
                        </Layout>
                    </Space>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
