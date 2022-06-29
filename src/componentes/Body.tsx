import fotoCarro from '../assets/foto-carro.png'
import { Buttonplaceh } from './Buttonplaceh'

export function Body() {

    return (

        <div className='grid grid-cols-2 justify-items-start' >

            <div className='p-6' >
                <h1 className=" m-12 flex text-left font-black text-5xl text-blue-900">
                    Vai comprar um veículo?
                </h1>
                <h2 className=" m-12 flex text-left text-xl">
                    Saber seu histórico nunca foi tão fácil! <br />
                    Consulte pela placa e receba diversas informações. 😉
                      
                </h2>

                <Buttonplaceh />                          

            </div>

            <div >
                <div className="px-10 max-w-3xl  right-4 flex flex-direction:collumn ">
                    < img src="https://images2.imgbox.com/2a/27/QsyDDeev_o.png" alt=" Foto carro placa buscar dados consultar dados pela placa" />
                </div>
            </div>
        </div>
    )
}


// className="px-10 max-w-3xl  right-4"

