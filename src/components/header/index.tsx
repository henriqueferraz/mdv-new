import Image from 'next/image'

import './style.css'

export const Header = () => {
    return (
        <div className='header mt-6'>
            <div className=''>
                <Image
                    src='/images/logo_MDV-novo_bann.png'
                    width={170}
                    height={100}
                    alt='Maternidade Darcy Vargas'
                />
            </div>
            <div className='centraliza'>
                <div className=' text-4xl font-bold'>Pesquisa de Satisfação</div>
                <p>Para nós, sua opinião é muito importante para ajudar a melhorar nossos serviços.</p>
            </div>
        </div>
    )
}