import Image from 'next/image'

import './style.css'

export const Header = () => {
    return (
        <div className='header'>
            <div className=' mt-6'>
                <Image
                    src='/images/logo_MDV-novo_bann.png'
                    width={170}
                    height={100}
                    alt='Maternidade Darcy Vargas'
                />
            </div>
            <div className='centraliza'>
                <div className='text-xl font-bold sm:text-4xl'>Pesquisa de Satisfação</div>
                <p className='text-base sm:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed lorem ac mi facilisis accumsan vel non mi.</p>
            </div>
        </div>
    )
}