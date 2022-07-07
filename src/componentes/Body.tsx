import fotoCarro from '../assets/foto-carro.png'
import { Buttonplaceh } from './Buttonplaceh'

export function Body() {

    return (

        <body >
            <div >
                <h1 className=" py-16 flex text-center justify-center font-black text-5xl text-blue-900">
                    Vai comprar um veículo?
                </h1>

                <h2 className="text-center justify-center text-xl">
                    Saber seu histórico nunca foi tão fácil! <br />
                    Por <strong>apenas</strong> <strong className='text-blue-900'>R$ 8,99</strong> consulte pela placa e <br /> receba diversas informações. 😉
                </h2>

                <Buttonplaceh />
            </div>

            
        </body>
    )
}


// className="px-10 max-w-3xl  right-4"

//<div className='flex justify-center'>
  //              <div className="max-w-2xl right-4 ">
    //                < img src="https://images2.imgbox.com/2a/27/QsyDDeev_o.png" alt=" Foto carro placa buscar dados consultar dados pela placa" />
      //          </div>
        //    </div >
